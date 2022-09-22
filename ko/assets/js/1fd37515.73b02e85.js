"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1838],{

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

/***/ 65407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25026);


function LoopVideo(props) {
  var _a, _b;
  const videoSrc = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.url);
  const width = (_a = props.width) != null ? _a : "100%";
  const height = (_b = props.height) != null ? _b : "100%";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loop-video"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: true,
    width,
    height
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    src: videoSrc,
    type: "video/mp4"
  }), "Your browser does not support the video tag."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children));
}
/* harmony default export */ __webpack_exports__["Z"] = (LoopVideo);


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

/***/ 39725:
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
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82985);
/* harmony import */ var _site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65407);
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
  id: "canvas-view",
  title: "\uCE94\uBC84\uC2A4 \uBDF0"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/canvas-view",
  "id": "development/ui-development/designer-user-guide/canvas-view",
  "title": "\uCE94\uBC84\uC2A4 \uBDF0",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/canvas-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/canvas-view",
  "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/canvas-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "canvas-view",
    "title": "\uCE94\uBC84\uC2A4 \uBDF0"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uBA54\uC778 \uCC3D",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/main-window"
  },
  "next": {
    "title": "\uC774\uBBF8\uC9C0 \uBDF0",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/images-view"
  }
};
const assets = {};





const toc = [{
  value: "\uC67C\uCABD \uB3C4\uAD6C \uBAA8\uC74C",
  id: "left-side-bar",
  level: 2
}, {
  value: "Screens \uBC0F Custom Containers",
  id: "screens--custom-containers",
  level: 3
}, {
  value: "\uCE94\uBC84\uC2A4",
  id: "canvas",
  level: 2
}, {
  value: "\uC704\uC82F \uBA54\uB274",
  id: "widget-menu",
  level: 3
}, {
  value: "\uC704\uC82F \uC120\uD0DD",
  id: "widget-selection",
  level: 3
}, {
  value: "\uC704\uC82F \uC704\uCE58 \uC870\uC815",
  id: "widget-positioning",
  level: 3
}, {
  value: "\uC704\uC82F \uC21C\uC11C \uCEE8\uD2B8\uB864",
  id: "widget-order-controls",
  level: 3
}, {
  value: "\uB0B4\uC6A9 \uC790\uB974\uAE30 \uCEE8\uD2B8\uB864",
  id: "content-clipping-control",
  level: 3
}, {
  value: "\uBCC0\uACBD \uC774\uB825 \uCEE8\uD2B8\uB864",
  id: "history-controls",
  level: 3
}, {
  value: "\uD655\uB300/\uCD95\uC18C \uCEE8\uD2B8\uB864",
  id: "zoom-controls",
  level: 3
}, {
  value: "\uC624\uB978\uCABD \uB3C4\uAD6C \uBAA8\uC74C",
  id: "right-side-bar",
  level: 2
}, {
  value: "Properties",
  id: "properties",
  level: 3
}, {
  value: "Interactions",
  id: "interactions",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uADF8\uB798\uD53D \uC694\uC18C\uB97C \uAC1C\uBC1C\uD560 \uB54C \uC0AC\uC6A9\uB418\uB294 \uBDF0\uB85C\uC11C, \uC2E4\uD589 \uC2DC \uBCF4\uC5EC\uC9C0\uB294 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC774\uBBF8\uC9C0\uB85C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uC560\uB2C8\uBA54\uC774\uC158\uC774\uB098 \uC2DC\uC2A4\uD15C \uC694\uC18C \uAC04 \uC0C1\uD638\uC791\uC6A9\uACFC \uAC19\uC740 \uB3D9\uC801 \uC694\uC18C\uC5D0 \uB300\uD55C \uC124\uBA85\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 \uCE94\uBC84\uC2A4 \uBDF0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "left-side-bar"
  }), `\uC67C\uCABD \uB3C4\uAD6C \uBAA8\uC74C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC67C\uCABD \uB3C4\uAD6C \uBAA8\uC74C\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#screens--custom-containers"
  }), `Screens\uC640 Custom Containers`), ` \uC0AC\uC774\uC5D0\uC11C \uC774\uB3D9\uD560 \uC218 \uC788\uB294 \uD0ED \uCEE8\uD2B8\uB864\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "screens--custom-containers"
  }), `Screens \uBC0F Custom Containers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screens \uD0ED\uACFC Custom Containers \uD0ED\uC5D0\uB294 \uAC01 \uC2A4\uD06C\uB9B0\uACFC \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0 \uC18D\uD558\uB294 \uC704\uC82F\uC5D0 \uB300\uD55C \uAC1C\uC694 \uD2B8\uB9AC\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uD2B8\uB9AC \uB0B4 \uAC01 \uC704\uC82F\uB9C8\uB2E4 \uB2E4\uB978 \uC704\uC82F\uB3C4 \uD3EC\uD568\uB420 \uC218 \uC788\uB294\uB370, \uC704\uC82F \uC774\uB984 \uC606\uC758 V\uC790 \uAE30\uD638\uB97C \uD074\uB9AD\uD558\uBA74 \uD56D\uBAA9\uC744 \uC811\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2A4\uD06C\uB9B0, \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uADF8\uB9AC\uACE0 \uC704\uC82F\uC758 \uC21C\uC11C\uB294 \uB2E4\uB978 \uC2A4\uD06C\uB9B0, \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uADF8\uB9AC\uACE0 \uC704\uC82F\uC758 \uC704 \uB610\uB294 \uC544\uB798\uB85C \uB4DC\uB798\uADF8\uD558\uC5EC \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-order-controls"
  }), `\uC704\uC82F \uC21C\uC11C \uCEE8\uD2B8\uB864`), `\uC744 \uC0AC\uC6A9\uD574 \uBCC0\uACBD\uD558\uB294 \uBC29\uBC95\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC704\uC82F \uC21C\uC11C\uB97C \uBCC0\uACBD\uD558\uBA74 \uB2E4\uB978 \uC704\uC82F \uC704\uC5D0 \uB80C\uB354\uB9C1\uB418\uB294 \uC704\uC82F\uC774 \uACB0\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE8\uD14C\uC774\uB108 \uC720\uD615\uC758 \uC704\uC82F\uC5D0\uB294 \uD558\uC704 \uC704\uC82F\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uB294\uB370, \uD2B8\uB9AC \uBDF0\uC5D0\uC11C \uB2E4\uB978 \uC704\uC82F\uC744 \uC5EC\uAE30\uB85C \uB4DC\uB798\uADF8\uD558\uBA74 \uB429\uB2C8\uB2E4. \uADF8 \uBC16\uC5D0 \uC704\uC82F\uC744 \uD55C \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uB2E4\uB978 \uC2A4\uD06C\uB9B0\uC73C\uB85C \uB4DC\uB798\uADF8\uD558\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CTRL\uC744 \uB204\uB978 \uC0C1\uD0DC\uC5D0\uC11C \uC704\uC82F\uC744 \uD074\uB9AD\uD558\uBA74 \uC5EC\uB7EC \uAC1C\uC758 \uC704\uC82F\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"+" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uC2A4\uD06C\uB9B0\uACFC \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-menu"
  }), `\uC704\uC82F \uBA54\uB274`), `\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC2A4\uD06C\uB9B0\uACFC \uB2E4\uB978 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB294 'Custom Containers' \uCE74\uD14C\uACE0\uB9AC\uC5D0\uC11C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2A4\uD06C\uB9B0, \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uADF8\uB9AC\uACE0 \uC704\uC82F\uC5D0\uC11C \uB9C8\uC6B0\uC2A4 \uC624\uB978\uCABD \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBA54\uB274\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Rename`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F2`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Delete Widget`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `DEL`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Copy`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + C`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Paste`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + V`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Move Up`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + F`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Move Down`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + B`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Edit Source Files*`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, ` *\uC2A4\uD06C\uB9B0\uACFC \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    width: "40%",
    height: "40%",
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-tree.mp4",
    mdxType: "LoopVideo"
  }, "\uC67C\uCABD \uBC14\uC758 \uC2A4\uD06C\uB9B0 \uD2B8\uB9AC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "canvas"
  }), `\uCE94\uBC84\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4 \uBDF0 \uC0C1\uB2E8\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#widget-menu"
  }), `\uC704\uC82F \uBA54\uB274`), `\uAC00 \uC788\uB294\uB370, \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC704\uC82F\uC774 \uC5EC\uAE30\uC5D0 \uBAA8\uB450 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBDF0 \uC911\uC559\uC5D0\uB294 \uCE94\uBC84\uC2A4\uAC00 \uC788\uC73C\uBA70, \uC5EC\uAE30\uC5D0 \uD604\uC7AC \uC120\uD0DD\uB41C \uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uBDF0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBDF0 \uD558\uB2E8\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#zoom-controls"
  }), `\uD655\uB300/\uCD95\uC18C \uCEE8\uD2B8\uB864`), `\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#content-clipping-control"
  }), `\uCF58\uD150\uCE20 \uC790\uB974\uAE30 \uCEE8\uD2B8\uB864`), `\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view.mp4",
    mdxType: "LoopVideo"
  }, "\uCE94\uBC84\uC2A4 \uBDF0\uC758 \uCE94\uBC84\uC2A4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-menu"
  }), `\uC704\uC82F \uBA54\uB274`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC82F \uBA54\uB274\uC5D0\uC11C All \uC704\uC82F \uADF8\uB8F9 \uD0ED\uC744 \uD074\uB9AD\uD558\uAC70\uB098, \uB2E8\uCD95\uD0A4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `A\uB97C`), ` \uB204\uB974\uBA74 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBAA8\uB4E0 \uC704\uC82F\uC774 \uCE74\uD14C\uACE0\uB9AC\uBCC4\uB85C \uBD84\uB958\uB418\uC5B4 \uC788\uB294 \uBAA9\uB85D\uC774 \uC5F4\uB9BD\uB2C8\uB2E4. \uD2B9\uC815 \uC704\uC82F \uADF8\uB8F9 \uD0ED\uC744 \uD074\uB9AD\uD558\uBA74 \uD574\uB2F9 \uCE74\uD14C\uACE0\uB9AC\uC5D0 \uC18D\uD55C \uC704\uC82F\uC758 \uBAA9\uB85D\uC774 \uC5F4\uB9BD\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC82F\uC744 \uD074\uB9AD\uD558\uBA74 \uD604\uC7AC \uC120\uD0DD\uB418\uC5B4 \uD45C\uC2DC\uB41C \uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 \uCE94\uBC84\uC2A4\uC5D0 \uD574\uB2F9 \uC704\uC82F\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `All \uC704\uC82F \uADF8\uB8F9\uC5D0\uB3C4 \uAC80\uC0C9 \uD544\uB4DC\uAC00 \uC788\uC9C0\uB9CC \uC5EC\uAE30\uC11C\uB294 \uD37C\uC9C0 \uAC80\uC0C9 \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD558\uAE30 \uB54C\uBB38\uC5D0 \uAC80\uC0C9\uC5B4\uC640 \uAC00\uC7A5 \uC77C\uCE58\uD558\uB294 \uC704\uC82F\uC744 \uCC3E\uB294 \uB370 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uAC00\uC7A5 \uC77C\uCE58\uD558\uB294 \uACB0\uACFC\uAC00 \uAC15\uC870 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uD37C\uC9C0 \uAC80\uC0C9 \uAE30\uB2A5\uC774 \uC788\uAE30 \uB54C\uBB38\uC5D0, \uC57D\uC5B4\uAC00 \uC694\uC778\uC5D0 \uD3EC\uD568\uB418\uB294 \uACBD\uC6B0 "bwl"\uC744 \uC785\uB825\uD558\uBA74 "Button With Label"\uC774 \uACB0\uACFC\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uAC80\uC0C9 \uD544\uB4DC\uC5D0 \uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uACE0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Enter\uB97C`), ` \uB204\uB974\uBA74 \uAC15\uC870 \uD45C\uC2DC\uB41C \uC704\uC82F\uC774 \uCE94\uBC84\uC2A4\uC5D0 \uC0BD\uC785\uB418\uACE0 \uC704\uC82F \uBA54\uB274\uAC00 \uB2EB\uD799\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/canvas-view/widget-menu.mp4",
    mdxType: "LoopVideo"
  }, "\uCE94\uBC84\uC2A4 \uBDF0\uC758 \uC704\uC82F \uBA54\uB274"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-selection"
  }), `\uC704\uC82F \uC120\uD0DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uC560\uB2C8\uBA54\uC774\uC158\uACFC \uAC19\uC774, \uCE94\uBC84\uC2A4\uC5D0\uC11C \uD074\uB9AD\uB9CC \uD574\uB3C4 \uC704\uC82F\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBCF5\uC218 \uC120\uD0DD\uB3C4 \uAC00\uB2A5\uD55C\uB370, \uD0A4\uBCF4\uB4DC\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl\uC744`), ` \uB204\uB978 \uCC44 \uC5EC\uB7EC \uAC1C\uC758 \uC704\uC82F\uC744 \uD074\uB9AD\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-positioning"
  }), `\uC704\uC82F \uC704\uCE58 \uC870\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uC560\uB2C8\uBA54\uC774\uC158\uACFC \uAC19\uC774, \uAC00\uC7A5\uC790\uB9AC\uB97C \uB4DC\uB798\uADF8\uD558\uBA74 \uC704\uC82F\uC758 \uC704\uCE58\uB97C \uBCC0\uACBD\uD558\uAC70\uB098 \uD06C\uAE30\uB97C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uD654\uC0B4\uD45C \uD0A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC120\uD0DD\uD55C \uC704\uC82F\uC744 \uD53D\uC140 \uB2E8\uC704\uB85C \uC62E\uAE30\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uD0A4\uBCF4\uB4DC\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Ctrl\uC744`), ` \uB204\uB978 \uCC44 \uD654\uC0B4\uD45C \uD0A4\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC120\uD0DD\uD55C \uC704\uC82F\uC774 10\uD53D\uC140\uC529 \uC774\uB3D9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "widget-order-controls"
  }), `\uC704\uC82F \uC21C\uC11C \uCEE8\uD2B8\uB864`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC73C\uB85C \uBCF4\uB0B4\uAE30\uC640 \uB4A4\uB85C \uBCF4\uB0B4\uAE30 \uB2E8\uCD95\uD0A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC704\uC82F \uC21C\uC11C\uB97C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC2A4\uD06C\uB9B0\uC774\uB098 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uD2B8\uB9AC\uC5D0\uC11C\uB3C4 \uC704\uC82F \uC21C\uC11C\uB97C \uBC14\uAFC0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC73C\uB85C \uBCF4\uB0B4\uAE30\uB97C \uC2E4\uD589\uD558\uB294 \uB2E8\uCD95\uD0A4\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + F`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB4A4\uB85C \uBCF4\uB0B4\uAE30\uB97C \uC2E4\uD589\uD558\uB294 \uB2E8\uCD95\uD0A4\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + B`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "content-clipping-control"
  }), `\uB0B4\uC6A9 \uC790\uB974\uAE30 \uCEE8\uD2B8\uB864`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4\uC5D0\uC11C \uC2A4\uD06C\uB9B0\uACFC \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108, \uADF8\uB9AC\uACE0 \uCEE8\uD14C\uC774\uB108\uD615 \uC704\uC82F\uC758 \uD558\uC704 \uC704\uC82F\uC758 \uACBD\uACC4\uB97C \uBC97\uC5B4\uB098\uB294 \uC704\uC82F\uC740 \uC798\uB9BD\uB2C8\uB2E4. \uB0B4\uC6A9 \uC790\uB974\uAE30 \uCEE8\uD2B8\uB864\uC740 \uC704\uC82F \uC804\uCCB4 \uC790\uB974\uAE30\uC640 \uBD80\uBD84 \uD45C\uC2DC\uD558\uAE30 \uC0AC\uC774\uC5D0\uC11C \uC804\uD658\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/content-clipping-toggle-button-4.17.png",
    mdxType: "Figure"
  }, "\uCE94\uBC84\uC2A4 \uBDF0\uC5D0\uC11C \uC798\uB9B0 \uB0B4\uC6A9 \uD45C\uC2DC\uD558\uAE30/\uC228\uAE30\uAE30 \uCEE8\uD2B8\uB864"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uC774\uBBF8\uC9C0\uB97C \uBCF4\uBA74 Box \uC808\uBC18\uC774 \uC2A4\uD06C\uB9B0 \uACBD\uACC4\uB97C \uBC97\uC5B4\uB098 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uB0B4\uC6A9 \uC790\uB974\uAE30 \uCEE8\uD2B8\uB864\uC774 \uC798\uB9B0 \uC704\uC82F\uC744 \uD45C\uC2DC\uD558\uB3C4\uB85D \uC124\uC815\uB418\uC5B4 \uC788\uC73C\uBA74 Box\uAC00 \uC644\uC804\uD558\uAC8C \uD45C\uC2DC\uB418\uC9C0 \uC54A\uACE0 \uACBD\uACC4\uB97C \uBC97\uC5B4\uB09C \uBD80\uBD84\uC774 \uD750\uB9BF\uD558\uAC8C \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/clipped-content-4.17.png",
    mdxType: "Figure"
  }, "\uC798\uB9B0 \uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD558\uAC70\uB098 \uC228\uAE38 \uB54C \uAC01\uAC01 \uBCF4\uC5EC\uC9C0\uB294 Box \uC704\uC82F\uC758 \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "history-controls"
  }), `\uBCC0\uACBD \uC774\uB825 \uCEE8\uD2B8\uB864`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC804\uC5D0 \uCE94\uBC84\uC2A4\uC5D0\uC11C \uC2E4\uD589\uD55C \uBCC0\uACBD \uB0B4\uC6A9\uB4E4\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "file-menu"
  }), `\uD30C\uC77C \uBA54\uB274`), `\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "file-menu#edit"
  }), `Edit`), `\uC744 \uD1B5\uD574 \uC2E4\uD589\uC744 \uCDE8\uC18C\uD558\uAC70\uB098 \uC7AC\uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\uC2A4\uD06C\uB9B0\uACFC \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB9C8\uB2E4 \uAC01\uAC01 \uBCC0\uACBD \uC774\uB825\uC744 \uBCF4\uC720\uD558\uACE0 \uC788\uC73C\uBBC0\uB85C \uD2B9\uC815 \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uC218\uD589\uD55C \uBCC0\uACBD \uC791\uC5C5\uC744 \uC2E4\uD589 \uCDE8\uC18C\uD558\uAC70\uB098 \uC7AC\uC2E4\uD589\uD558\uB824\uBA74 \uD574\uB2F9 \uC2A4\uD06C\uB9B0\uC774 \uCE94\uBC84\uC2A4\uC5D0 \uD45C\uC2DC\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCC0\uACBD \uC774\uB825 \uCEE8\uD2B8\uB864\uC744 \uC2E4\uD589\uD558\uB294 \uB2E8\uCD95\uD0A4\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + Z`), ` \uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + Y`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "zoom-controls"
  }), `\uD655\uB300/\uCD95\uC18C \uCEE8\uD2B8\uB864`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4\uC758 \uD655\uB300/\uCD95\uC18C \uBE44\uC728\uC740 \uCE94\uBC84\uC2A4 \uD558\uB2E8\uC5D0 \uC788\uB294 \uD655\uB300/\uCD95\uC18C \uCEE8\uD2B8\uB864\uC744 \uC0AC\uC6A9\uD574 \uC870\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4\uB97C \uC911\uC559\uC73C\uB85C \uC870\uC815\uD558\uC5EC 100% \uBE44\uC728\uB85C \uB3CC\uC544\uAC00\uB824\uBA74 Reset Canvas \uBC84\uD2BC\uC744 \uB204\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/zoom-controls-4.17.png",
    mdxType: "Figure"
  }, "\uCE94\uBC84\uC2A4 \uBDF0\uC758 \uD655\uB300/\uCD95\uC18C \uCEE8\uD2B8\uB864"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uACFC \uAC19\uC740 \uB2E8\uCD95\uD0A4\uB85C\uB3C4 \uD655\uB300/\uCD95\uC18C \uBE44\uC728\uC744 \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", {
    "spaces-before": "0"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uD655\uB300/\uCD95\uC18C 25%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 1")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 1"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uD655\uB300/\uCD95\uC18C 50%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 2")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "Ctrl\uC744 + 2"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uD655\uB300/\uCD95\uC18C 75%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 3"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uD655\uB300/\uCD95\uC18C 100%"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 4")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 4"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uD655\uB300"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + Mouse wheel up")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + '+'"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uCD95\uC18C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + Mouse wheel down")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + '-'"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uD655\uB300/\uCD95\uC18C \uB9AC\uC14B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + 0")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + NUMPAD 0")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "right-side-bar"
  }), `\uC624\uB978\uCABD \uB3C4\uAD6C \uBAA8\uC74C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC624\uB978\uCABD \uB3C4\uAD6C \uBAA8\uC74C\uC5D0\uB294 \uD604\uC7AC \uC120\uD0DD\uB41C \uC704\uC82F\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#properties"
  }), `Properties`), `\uC640 \uD604\uC7AC \uCE94\uBC84\uC2A4\uC5D0 \uBCF4\uC774\uB294 \uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#interactions"
  }), `Interactions`), `\uB85C \uC774\uB3D9\uD560 \uC218 \uC788\uB294 \uD0ED \uCEE8\uD2B8\uB864\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "properties"
  }), `Properties`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Properties \uD0ED\uC5D0\uB294 \uD604\uC7AC \uC120\uD0DD\uB41C \uC704\uC82F/\uC2A4\uD06C\uB9B0/\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 \uC18D\uC131\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC18D\uC131 \uBAA9\uB85D \uC0C1\uB2E8\uC5D0\uB294 \uC120\uD0DD\uB41C \uAD6C\uC131\uC694\uC18C\uC758 \uC774\uB984\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC774\uB984 \uC67C\uCABD\uC5D0\uB294 \uC544\uC774\uCF58\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC544\uC774\uCF58\uC5D0 \uB9C8\uC6B0\uC2A4 \uCEE4\uC11C\uB97C \uAC16\uB2E4 \uB300\uBA74 \uC124\uBA85 \uBB38\uAD6C\uAC00 \uD45C\uC2DC\uB418\uACE0, \uC544\uC774\uCF58\uC744 \uD074\uB9AD\uD558\uBA74 \uAD6C\uC131\uC694\uC18C \uBB38\uC11C\uB85C \uC5F0\uACB0\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/properties-tab-4.17.png",
    mdxType: "Figure"
  }, "Box\uC758 \uC18D\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interactions"
  }), `Interactions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Interactions \uD0ED\uC5D0\uB294 \uD604\uC7AC \uCE94\uBC84\uC2A4\uC5D0 \uD45C\uC2DC\uB41C \uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 \uC0C1\uD638\uC791\uC6A9\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C1\uD638\uC791\uC6A9\uC740 "+" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD574 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/canvas-view/interactions-tab-4.17.png",
    mdxType: "Figure"
  }, "\uC0C1\uD638\uC791\uC6A9 \uCD94\uAC00\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "interactions-view",
    mdxType: "Link"
  }, "Interactions"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);