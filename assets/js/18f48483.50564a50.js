"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3556],{

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

/***/ 77187:
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
  title: "Tutorial 2: Creating Your Own Application"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-02",
  "id": "tutorials/tutorial-02",
  "title": "Tutorial 2: Creating Your Own Application",
  "description": "",
  "source": "@site/docs/tutorials/tutorial-02.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-02",
  "permalink": "/4.20/docs/tutorials/tutorial-02",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-02",
    "title": "Tutorial 2: Creating Your Own Application"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Tutorial 1: Trying Out the Examples",
    "permalink": "/4.20/docs/tutorials/tutorial-01"
  },
  "next": {
    "title": "Tutorial 3: Applications with Multiple Screens",
    "permalink": "/4.20/docs/tutorials/tutorial-03"
  }
};
const assets = {};







const toc = [{
  value: "Step 1: Setting a Background Image",
  id: "step-1-setting-a-background-image",
  level: 2
}, {
  value: "Starting a New Project",
  id: "starting-a-new-project",
  level: 3
}, {
  value: "Inserting a Background",
  id: "inserting-a-background",
  level: 3
}, {
  value: "Step 2: Adding Buttons",
  id: "step-2-adding-buttons",
  level: 2
}, {
  value: "Adding the Buttons",
  id: "adding-the-buttons",
  level: 3
}, {
  value: "Changing the Look",
  id: "changing-the-look",
  level: 3
}, {
  value: "Step 3: Adding Text",
  id: "step-3-adding-text",
  level: 2
}, {
  value: "Text Background",
  id: "text-background",
  level: 3
}, {
  value: "Adding the Text",
  id: "adding-the-text",
  level: 3
}, {
  value: "Changing the Text Typography",
  id: "changing-the-text-typography",
  level: 3
}, {
  value: "Using a Wildcard Text",
  id: "using-a-wildcard-text",
  level: 3
}, {
  value: "Step 4: Adding Code",
  id: "step-4-adding-code",
  level: 2
}, {
  value: "Implementing the Virtual Methods",
  id: "implementing-the-virtual-methods",
  level: 3
}, {
  value: "Updating the Counter Value",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Follow this tutorial to learn more about the basics of TouchGFX. You will learn how to add images to your application and use buttons. You will also see how to use texts and calculated numbers. In the last steps you will write code to enhance the look of the UI you have created with TouchGFX Designer. This tutorial assumes no knowledge of TouchGFX, but we assume a little experience with programming.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-1-setting-a-background-image"
  }), `Step 1: Setting a Background Image`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this first step you will see how to insert a PNG image as a background. But first we will create a new project.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "starting-a-new-project"
  }), `Starting a New Project`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Start a new project in TouchGFX Designer. We will call the project "MyApplication1". The project is based on the "STM32F746G Discovery Kit".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you have a different STM32 Evaluation Kit, go ahead and look in the list presented in TouchGFX Designer to see if it is supported. If you do not have a supported board you can select the "Simulator" and just run the application on your Windows computer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Please be aware that this tutorial runs on a display with a resolution of 480x272. If you select an Application Template with a different resolution, the graphics will not fit the screen, but you should be able to complete the tutorial anyway.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/new-proj-4-17.png",
    mdxType: "Figure"
  }, "Creating the new project using the STM32F746"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Now that you have a newly created blank project let us start modifying it.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A TouchGFX application consists of a number of screens. The screens contain a number of widgets that make up the user interface. A Screen covers the whole display, so only one Screen is shown to the user at a time.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The first thing to do is to change the name of the initial Screen to
"Main" as illustrated below. Select the Screen in the list on the left
(1), and change the name in the name field on the right (2). It is
also possible to rename the Screen by double-clicking or
right-clicking the Screen in the list (1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[60, 13], [435, 10]],
    imageSource: "/img/tutorials/tutorial-02/change-name-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Changing the name of the Screen"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "inserting-a-background"
  }), `Inserting a Background`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `It is normally a good thing to cover the complete background of a Screen with one or more widgets. For example, this can be a Box or an Image. The background will show as black if you do not cover it. In this application we will use an Image.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Before we can use an image in TouchGFX Designer, we need to import the file. TouchGFX supports BMP and PNG images (though TouchGFX Designer only supports importing PNG images). PNG files are preferred over BMP files as they are smaller and supports transparent pixels.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The images we will use in this tutorial can be downloaded from this `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(77460)/* ["default"] */ .Z)
  }, "link"), `. Unzip the file to a directory on your disk.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We want to use the file named "background.png" as our background. To import that file:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Select the Images tab and click the "+" button.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Navigate to the unzipped folder and select the "background.png" file.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Press open to import it.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You can also "drag & drop" images from File Explorer onto the image tab, or even directly on the canvas, to import them to your project.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Be aware that images imported to your project will be converted and
compiled into your project and thus take up flash space. So only
import the images that you need.  Click the "Images" button on the
left (1), then click the "+" button on the right (2), to add an
image. The TouchGFX Designer opens a normal file-browser where you can
navigate to the downloaded images and select the "background.png"
file.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[7, 18], [460, 4]],
    imageSource: "/img/tutorials/tutorial-02/image-import-4-17.png",
    mdxType: "FigureWithPoints"
  }, "The image background.png is imported"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We are now ready to use the image in our application. To do that we need an Image widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Click the Canvas button on the left (1)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Find the Image widget in the list of widgets (2)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Click it to insert an Image Widget on the Screen.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `It is a good principle to change the name of widgets to something meaningful. In our case, something like "backgroundImage" (3).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[7, 2], [270, 18], [440, 10]],
    imageSource: "/img/tutorials/tutorial-02/insert-widget-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Inserting an Image widget"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `After inserting a widget we normally need to configure some of its properties like `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Position`), ` or `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Color`), `. The properties of the selected Widget are shown to the right in the TouchGFX Designer. The widgets in the Screen are shown in the tree-view on the left (1). In this case we are satisfied with the position in the point 0,0, but we want to change the Image property to select the "background.png" file previously imported. Click the Image property (2) and select the "background.png".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[55, 20], [435, 75]],
    imageSource: "/img/tutorials/tutorial-02/selecting-image-as-background-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Selecting the imported image file as background"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We have now created a simple application with one Screen consisting of only a background image covering the whole user interface.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Before moving on try to press the "Run Simulator" button to check that the project compiles and runs. You can still not interact with the application since we have not yet added any active widgets.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-2-adding-buttons"
  }), `Step 2: Adding Buttons`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this step we will add two buttons to the application and use different PNG files to give them a customized look.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-buttons"
  }), `Adding the Buttons`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Add a button to the Screen by clicking the Button widget in the Widgets tab (1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Move the new widget by dragging it with the mouse.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Position the button at x=40, y=60. Check the position in the properties on the right (2).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Name the new Widget "buttonUp".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Add another Button at position x=40, y=150. Name this widget "buttonDown".`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The project now looks like this:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[265, 18], [435, 25]],
    imageSource: "/img/tutorials/tutorial-02/adding-buttons-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Adding two buttons"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You can use the small up/down button on the X and Y properties to fine-tune the position of the widgets. You can also select the button widget (by clicking it on the canvas) and adjust the position using the arrow keys on your keyboard.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "changing-the-look"
  }), `Changing the Look`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We will now change the look of the buttons. A Button is made up of two images. One image is shown when the button is pressed, and another image is shown when the button is not pressed (released). Most widgets come with a set of predefined styles, which is basically a set of values for certain properties of the widget describing a particular look. These styles are good for fast prototyping, but most often you will replace them when creating a real application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Go to the Images tab as in previous step and click the "plus" icon in the upper right corner to import some images. This time import the four images: "button_down_pressed.png", "button_down_released.png", "button_up_pressed.png", and "button_up_released.png".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/image-import-2-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Adding four Button images"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We see that we have in total seven images in our project, even though
we only imported 5 images. The extra two images are the blue images
used on the buttons by default. These will be removed automatically
when they are not used anymore.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Go back to the canvas and select the "buttonUp" button. Click "Released Image" property (1), then click "Project to show your images (2), then finally select the correct image (3).
For "buttonUp", select "button_up_released.png" for the Released Image property. Select "button_up_pressed.png" for Pressed Image.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[440, 75], [390, 90], [425, 124]],
    imageSource: "/img/tutorials/tutorial-02/button-selecting-up-image-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Setting the Button images"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You can immediately see the look of the button on the canvas in TouchGFX Designer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/bitmap-for-button-4-17.png",
    mdxType: "Figure"
  }, "Setting bitmaps for buttons"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `For "buttonDown", select "button_down_released.png" for Released Image, "button_down_pressed.png" for Pressed Image.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You have now finished setting up the buttons. Click "Run Simulator" to try your application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Try both buttons to verify that the buttons are configured correct.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-4-17.png",
    mdxType: "Figure"
  }, "Running the Simulator"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "Most widgets in TouchGFX uses images to define their size, meaning that they cannot directly be resized. This is done for performance reasons (see ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/ui-components/general-ui-component-performance",
    mdxType: "Link"
  }, "General UI Component Performance"), "). If you want to change the size of such widgets, like for example the buttons in this tutorial, you will do this by creating a new set of images for the buttons and use them as Released and Pressed images instead."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-3-adding-text"
  }), `Step 3: Adding Text`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this step we will add a large TextArea widget to the application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `All text is shown using a TextArea widget, but before we add a TextArea to the application, we will add another Image to give the text a better background.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "text-background"
  }), `Text Background`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Import another image file, "counter_box.png".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Insert a new Image widget`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Name it "textBackground"`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Position it at x=250, y=59.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Set `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Image`), ` property to "counter_box".`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/add-background-for-text-4-17.png",
    mdxType: "Figure"
  }, "Added background for text"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-text"
  }), `Adding the Text`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We are now ready to add a TextArea widget. Click the TextArea icon in the Widgets / Miscellaneous drop-down menu. Rename the widget to "textCounter" and move the widget to position x=250, y=90.
We want the widget to show a large text, so un-check the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Auto-size`), ` property, and set the size to a fixed width=152, and height=90.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/add-textarea-4-17.png",
    mdxType: "Figure"
  }, "Added a TextArea"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The default color of a TextArea widget is black, which is rather dark on our background. Select the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Color`), ` property of "textCounter", and change the color to white.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/text-color-4-17.png",
    mdxType: "Figure"
  }, "Changing text color"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "changing-the-text-typography"
  }), `Changing the Text Typography`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We want the text to be bigger. The way to do that is to change the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Typography`), ` used for the text. A typography defines the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Font`), ` (e.g. Verdana), the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Size`), `, and the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Alignment`), ` (left, right, or center) for a text.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Select the Texts tab in the top left of TouchGFX Designer (1), click Typographies (2), and update the size of the "Default" typography to 80 (3).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[6, 35], [80, 0], [80, 40]],
    imageSource: "/img/tutorials/tutorial-02/typography-size-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Changing text size"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Going back to the Screen (by clicking the "Canvas" tab in the top left), we see that the text is much bigger now. In fact we cannot read the complete text "New Text". Click the centered icon under the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Alignment`), ` property to get the text centered (1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[460, 100]],
    imageSource: "/img/tutorials/tutorial-02/text-alignment-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Changing text alignment"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-a-wildcard-text"
  }), `Using a Wildcard Text`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We want the TextArea to show a number that we can change with the buttons. To do that, we must change the text to include a "wildcard". A wildcard is a marker ("`, `<`, `d`, `>`, `") in the text that can be substituted with something else like a number at runtime. We just want to show a number, so we will change the text to just "`, `<`, `d`, `>`, `". In other projects you can combine the dynamic parts with a fixed text, e.g. "Temperature: `, `<`, `temp`, `>`, ` \xB0C".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "The text inside the <...> wildcard brackets are optional. You can use them to communicate to implementers or translators what kind of information will be inserted in the wildcard or you can leave it empty."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Change the text to  "`, `<`, `d`, `>`, `" (1), click "Wildcard 1" (2), and set the default value to "0", and check "Use wildcard buffer".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[460, 70], [470, 80]],
    imageSource: "/img/tutorials/tutorial-02/wildcard-text-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Configure the wildcard text"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Click "Run Simulator" to try your application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-2.png",
    mdxType: "Figure"
  }, "Running the Simulator"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "To learn more about using texts and fonts, read the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "Texts and Fonts"), " page."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-4-adding-code"
  }), `Step 4: Adding Code`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `With TouchGFX Designer it is easy to link actions to a Button through an Interaction. An Interaction links a Trigger (e.g. a button press) to an Action (e.g. running code or moving an element).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Select the Interactions tab in the upper right corner (1) and click the "+" button to create a new Interaction`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[480, 0]],
    imageSource: "/img/tutorials/tutorial-02/add-interactions-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Adding interactions"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We will create two interactions, one for each of the buttons. We will setup both interactions to call a C++ method on the current Screen.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Change the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Trigger`), ` property to "Button is clicked".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Set the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Choose clicked source`), ` property to "buttonUp".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Change the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Action`), ` property to "Call new virtual function".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `For `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Function Name`), `, type "buttonUpClicked".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `You should also give the Interaction an informative name, so that you can recognize it later on.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/configure-interaction-4-17.png",
    mdxType: "Figure"
  }, "Configure the Button interaction"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Create a similar Interaction with "buttonDown" as "clicked source":`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Click "+" to start a new Interaction.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Change the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Trigger`), ` property to "Button is clicked".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Set the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Choose clicked source`), ` property to "buttonDown".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Change the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Action`), ` property to "Call new virtual function".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `For `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Function Name`), `, type "buttonDownClicked".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `You should also give the Interaction an informative name, so that you can recognize it later on.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you either click the "Generate Code" button or "Run Simulator" button, TouchGFX Designer will update the generated code with the information you entered in the interactions just created. This means that it will create two new virtual functions in the view base class for this screen.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Let us investigate this more and see how we can have our own code executed. Click "Generate Code" in lower right, then click the "Files" button in the lower left. This will give you a File Explorer placed in your application folder. Navigate to the folder:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/TouchGFX/generated/gui_generated/include/gui_generated/main_screen/`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `and open the file `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainViewBase.hpp`), `. If you like you can also open one of the project files and find the file in your IDE:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `Path to project file`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }, "Not all project files are present as default. To change toolchain for the project, you need to use the STM32CubeMX tool. Read more on this on the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
    mdxType: "Link"
  }, "Using IDEs with TouchGFX"), " page."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The new virtual methods are found in the public part of the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainViewBase`), ` class. The generated methods have empty implementations. The intention is that the programmer implements these methods in the subclass `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
  }), `Implementing the Virtual Methods`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The remaining task is now to implement these two methods to change the counter value when the user presses the buttons. To do that, declare the methods again in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), ` class. This class can be found in:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/TouchGFX/gui/include/gui/main_screen/MainView.hpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Open this file and insert the two function declarations in the class:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The next task is to implement the two methods by adding the implementation in the .cpp file. This file is located in:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/gui/src/main_screen/MainView.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In the implementation below we have added calls to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_printf`), `. This function is useful to print out lines of text when running the simulator. To use this function you need to include utils.hpp. When running on target, the lines have no effect.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Click "Run Simulator" in TouchGFX Designer again to run the new code. Click the buttons a couple of times to see that the interactions and methods are working as expected:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-3-4-17.png",
    mdxType: "Figure"
  }, "Running the Simulator with printout"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "updating-the-counter-value"
  }), `Updating the Counter Value`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The last task is to write C++ code in the new methods to update the counter value when the user presses the button. To do that we first add a new integer variable, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `counter`), `, in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), ` class:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `buttonUpClicked`), ` method we increment the counter value. The new value is then converted to a string and copied to the wildcard buffer we configured for the TextArea in a previous step:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The TextArea Widgets uses Unicode, so we have to use a special snprintf function that supports writing to Unicode buffers.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Note that we call `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `invalidate()`), ` on the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `textCounter`), ` widget after updating it. This ensures that the TextArea is redrawn after the counter value has been updated.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We need one more thing before the application is finished. TouchGFX only includes the characters needed, so we need to tell TouchGFX Designer to include the characters 0-9 in the "Default" typography. To do that, go back to TouchGFX Designer and click the "Texts" tab, then the "Typographies" tab. In the "Wildcard Ranges" column for the Default typography, add the range "0-9" (1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[190, 40]],
    imageSource: "/img/tutorials/tutorial-02/set-wildcard-range-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Setting the Wildcard Range for the Default typography"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Now click "Run Simulator" again and click the up button a few times:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-4-4-17.png",
    mdxType: "Figure"
  }, "Running the Simulator"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `As the program is now, it will not handle negative numbers correctly. This can be fixed, either by inserting a guard in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `buttonDownClicked()`), ` function to ensure the counter does not go below 0 or by adding the character "-" to the used typography. This can be accomplished simply by adding a minus ("-") in the Wildcard Characters cell for the Default typography.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This step concludes tutorial 2.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "Read more about texts on the ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "Texts and Fonts"), " page.")));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 77460:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/touchgfx-tutorial-02-fdc5f18c6ee29e0a96fa608460f4d03a.zip");

/***/ })

}]);