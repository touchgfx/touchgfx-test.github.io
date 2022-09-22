"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4380],{

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

/***/ 81368:
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
  title: "Mixins"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/mixins",
  "id": "development/ui-development/touchgfx-engine-features/mixins",
  "title": "Mixins",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/mixins.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/mixins",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/mixins",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "mixins",
    "title": "Mixins"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u540E\u7AEF\u901A\u4FE1",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/backend-communication"
  },
  "next": {
    "title": "\u6587\u672C\u548C\u5B57\u4F53",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"
  }
};
const assets = {};





const toc = [{
  value: "Move Animator",
  id: "move-animator",
  level: 2
}, {
  value: "\u5728\u7528\u6237\u4EE3\u7801\u4E2D\u4F7F\u7528Move Animator",
  id: "using-move-animator-in-user-code",
  level: 3
}, {
  value: "\u7528\u6237\u4EE3\u7801\u4E2D\u7684\u56DE\u8C03\u5B9E\u73B0",
  id: "callback-implementation-in-user-code",
  level: 3
}, {
  value: "API\u53C2\u8003",
  id: "api-reference",
  level: 3
}, {
  value: "Fade Animator",
  id: "fade-animator",
  level: 2
}, {
  value: "\u5728\u7528\u6237\u4EE3\u7801\u4E2D\u4F7F\u7528Fade Animator",
  id: "using-fade-animator-in-user-code",
  level: 3
}, {
  value: "\u7528\u6237\u4EE3\u7801\u4E2D\u7684\u56DE\u8C03\u5B9E\u73B0",
  id: "callback-implementation-in-user-code-1",
  level: 3
}, {
  value: "API\u53C2\u8003",
  id: "api-reference-1",
  level: 3
}, {
  value: "ClickListener",
  id: "clicklistener",
  level: 2
}, {
  value: "\u7528\u6237\u4EE3\u7801\u4E2D\u7684\u56DE\u8C03\u5B9E\u73B0",
  id: "callback-implementation-in-user-code-2",
  level: 3
}, {
  value: "API\u53C2\u8003",
  id: "api-reference-2",
  level: 3
}, {
  value: "Draggable",
  id: "draggable",
  level: 2
}, {
  value: "API\u53C2\u8003",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Mixin\u7C7B\u6269\u5C55\u63A7\u4EF6\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u4F7F\u4E4B\u80FD\u591F\u5C06\u79FB\u52A8\u6216\u900F\u660E\u5EA6\u503C\u53D8\u5316\u5236\u4F5C\u6210\u52A8\u753B\u3002 \u5728Move Animator\u548CFade Animator Mixin\u7684\u57FA\u7840\u4E0A\uFF0CTouchGFX Designer\u4EA4\u4E92\u80FD\u591F\u751F\u6210\u5C06\u79FB\u52A8\u6216\u900F\u660E\u5EA6\u503C\u53D8\u5316\u5236\u4F5C\u6210\u52A8\u753B\u7684\u4EE3\u7801\u3002 \u8FD9\u4E9BMixin\u53EF\u901A\u8FC7TouchGFX Designer\u6216\u5728\u7528\u6237\u4EE3\u7801\u4E2D\u624B\u52A8\u6DFB\u52A0\u5230\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Move and Fade Animators optionally uses easing equations to detail the progression of the animation. Read more about easing equations in the end of this `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#easing-equations"
  }), `section`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "move-animator"
  }), `Move Animator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Move Animator Mixin\u4F7F\u63A7\u4EF6\u80FD\u591F\u5C06\u4ECE\u5F53\u524D\u4F4D\u7F6E\u5230\u6307\u5B9A\u7ED3\u675F\u4F4D\u7F6E\u7684\u79FB\u52A8\u5236\u4F5C\u6210\u52A8\u753B\u3002 \u901A\u8FC7\u63D0\u4F9BEasingEquation\uFF0C\u53EF\u4EE5\u5BF9\u6CBFX\u548CY\u65B9\u5411\u7684\u79FB\u52A8\u8FDB\u884C\u63CF\u8FF0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\uFF0C\u53EF\u901A\u8FC7\u5728\u201CMixin\u201D\u533A\u57DF\u4E2D\u7ED9\u5B9A\u63A7\u4EF6\u7684\u5C5E\u6027\u4E2D\u542F\u7528Mixin\u6765\u5E94\u7528\u5B83\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u521B\u5EFA\u4E86\u79FB\u52A8\u63A7\u4EF6\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/interactions-view"
  }), `\u4EA4\u4E92`), `\uFF0CMove Animator Mixin\u4F1A\u88AB\u81EA\u52A8\u5E94\u7528\u4E8E\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-move-animator-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u542F\u7528\u4E86Move Animator Mixin"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u542F\u7528Move Animator Mixin\u4F1A\u66F4\u6539\u751F\u6210\u7684\u63A7\u4EF6\u7684\u58F0\u660E\u7B7E\u540D\uFF08\u5982\u4E0B\u6587\u6240\u793A\uFF09\uFF0C\u5176\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `Box`), `\u542F\u7528\u4E86Move Animator Mixin\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::MoveAnimator< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-move-animator-in-user-code"
  }), `\u5728\u7528\u6237\u4EE3\u7801\u4E2D\u4F7F\u7528Move Animator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u6709Move Animator Mixin\u5E94\u7528\u4E8E\u63A7\u4EF6\u65F6\uFF0C\u63A7\u4EF6\u80FD\u591F\u5C06\u5176\u4ECE\u4E00\u4E2A\u4F4D\u7F6E\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E\u7684\u79FB\u52A8\u5236\u4F5C\u6210\u52A8\u753B\u3002 \u5728\u672C\u8282\u4E2D\uFF0C\u5C06\u63D0\u4F9B\u5982\u4F55\u4F7F\u7528\u6B64\u65B0\u529F\u80FD\u7684\u6F14\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\u5BF9Box\u63A7\u4EF6\u542F\u7528Move Animator Mixin\u540E\uFF0C\u65B9\u6CD5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startMoveAnimation`), `\u53EF\u4F9B\u4F7F\u7528\u3002 \u6B64\u65B9\u6CD5\u6309\u4EE5\u4E0B\u987A\u5E8F\u91C7\u7528\u4E865\u4E2A\u53C2\u6570\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `endX\uFF1A\u76F8\u5BF9\u4E8E\u5176\u7236\u5143\u4EF6\u7684X\u4F4D\u7F6E\uFF0C\u5C0F\u90E8\u4EF6\u5E94\u79FB\u52A8\u5230\u6B64\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `endY\uFF1A\u76F8\u5BF9\u4E8E\u5176\u7236\u5143\u4EF6\u7684Y\u4F4D\u7F6E\uFF0C\u5C0F\u90E8\u4EF6\u5E94\u79FB\u52A8\u5230\u6B64\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `duration\uFF1AX\u548CY\u8F74\u65B9\u5411\u7684\u79FB\u52A8\u5E94\u8017\u8D39\u7684\u65F6\u95F4\uFF0C\u4EE5tick\u4E3A\u5355\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `xProgressionEquation\uFF1A\u5E94\u5F53\u5BF9X\u8F74\u65B9\u5411\u7684\u79FB\u52A8\u4F7F\u7528\u7684EasingEquation\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `yProgressionEquation\uFF1A\u5E94\u5F53\u5BF9Y\u8F74\u65B9\u5411\u7684\u79FB\u52A8\u4F7F\u7528\u7684EasingEquation\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u79FB\u52A8\u5230\u5750\u6807X\u7684\u793A\u4F8B\uFF1A0, X: \u57280\u523040 tick\u7684\u65F6\u95F4\u6BB5\u5185\uFF0C\u5728X\u548CY\u8F74\u65B9\u5411\u4F7F\u7528\u7EBF\u6027EasingEquation\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    box.startMoveAnimation(0, 0, 40, EasingEquations::linearEaseNone, EasingEquations::linearEaseNone);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "callback-implementation-in-user-code"
  }), `\u7528\u6237\u4EE3\u7801\u4E2D\u7684\u56DE\u8C03\u5B9E\u73B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53Move Animator Mixin\u5B8C\u6210\u52A8\u753B\u65F6\uFF0C\u53D1\u9001\u56DE\u8C03\u3002 \u5728\u672C\u8282\u4E2D\uFF0C\u5C06\u6F14\u793A\u5982\u4F55\u5B9E\u73B0\u6B64\u56DE\u8C03\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\u5BF9Box\u63A7\u4EF6\u542F\u7528Move Animator Mixin\u540E\uFF0C\u4E0B\u4E00\u6B65\u662F\u4E3A\u56DE\u8C03\u548C\u51FD\u6570\u6DFB\u52A0\u58F0\u660E\uFF0C\u4EE5\u4FBF\u5904\u7406\u7EE7\u627F\u81EA\u57FA\u7C7B\uFF08Box\u63A7\u4EF6\u7684\u4F4D\u7F6E\u6240\u5728\uFF09\u7684Screen header\u7C7B\u6587\u4EF6\u4E2D\u7684\u4E8B\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u540E\uFF0C\u9700\u8981\u5C06\u5904\u7406\u4E8B\u4EF6\u7684\u56DE\u8C03\u58F0\u660E\u548C\u51FD\u6570\u7ED1\u5B9A\u5230\u89C6\u56FE\u5BF9\u8C61\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u4E00\u6B65\u662F\u544A\u77E5Box\u63A7\u4EF6\u5728\u5176\u79FB\u52A8\u52A8\u753B\u7ED3\u675F\u65F6\u8981\u4F7F\u7528\u54EA\u4E2A\u56DE\u8C03\uFF0C\u8FD9\u662F\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), `\u5B8C\u6210\u7684\uFF0C\u76EE\u7684\u662F\u786E\u4FDD\u5728\u6BCF\u6B21\u8FDB\u5165\u5C4F\u5E55\u65F6\u90FD\u8BBE\u7F6E\u4E86\u56DE\u8C03\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u540E\u4E00\u6B65\u662F\u5B9E\u73B0\u51FD\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `boxMoveAnimationEndedHandler`), `\uFF0C\u5B83\u5C06\u5904\u7406\u56DE\u8C03\u3002 \u6700\u597D\u786E\u8BA4\u79FB\u52A8\u52A8\u753B\u5DF2\u7ED3\u675F\u7684Box\u786E\u5B9E\u662F\u8BE5\u201C\u65B9\u5757\u201D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
  }), `API\u53C2\u8003`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_move_animator",
    mdxType: "Link"
  }, "MoveAnimator\u7C7B\u7684API\u53C2\u8003"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "fade-animator"
  }), `Fade Animator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fade Animator Mixin\u4F7F\u63A7\u4EF6\u80FD\u591F\u5C06\u5176\u4ECE\u5F53\u524D\u900F\u660E\u5EA6\u503C\u81F3\u6307\u5B9A\u7ED3\u675F\u900F\u660E\u5EA6\u503C\u7684\u6E10\u9690\u8FC7\u7A0B\u5236\u4F5C\u6210\u52A8\u753B\u3002 \u901A\u8FC7\u63D0\u4F9BEasingEquation\uFF0C\u53EF\u4EE5\u63CF\u8FF0\u6E10\u9690\u901F\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u53EA\u6709\u5E94\u7528\u900F\u660E\u5EA6\u503C\u7684\u63A7\u4EF6\u624D\u652F\u6301Fade Animator Mixin\u3002 \u8FD9\u610F\u5473\u7740\u6240\u6709\u53EF\u80FD\u5305\u542B\u5176\u4ED6\u63A7\u4EF6\u7684\u63A7\u4EF6\uFF08\u5982", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../ui-components/containers/container",
    mdxType: "Link"
  }, "\u5BB9\u5668"), "\uFF09\u90FD\u4E0D\u652F\u6301Fade Animator Mixin\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\uFF0C\u53EF\u901A\u8FC7\u5728\u201CMixin\u201D\u533A\u57DF\u4E2D\u7ED9\u5B9A\u63A7\u4EF6\u7684\u5C5E\u6027\u4E2D\u542F\u7528Mixin\u6765\u5E94\u7528\u5B83\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u6DFB\u52A0\u4E86\u5728\u5927\u4E8E\u96F6\u7684\u65F6\u95F4\u6BB5\u5185\u6E10\u9690\u63A7\u4EF6\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/interactions-view"
  }), `\u4EA4\u4E92`), `\uFF0CFade Animator Mixin\u4F1A\u88AB\u81EA\u52A8\u5E94\u7528\u4E8E\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-fade-animator-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u542F\u7528\u4E86Fade Animator Mixin"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u542F\u7528Fade Animator Mixin\u4F1A\u66F4\u6539\u751F\u6210\u7684\u63A7\u4EF6\u7684\u58F0\u660E\u7B7E\u540D\uFF08\u5982\u4E0B\u6587\u6240\u793A\uFF09\uFF0C\u5176\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `Box`), `\u542F\u7528\u4E86Fade Animator Mixin\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::FadeAnimator< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-fade-animator-in-user-code"
  }), `\u5728\u7528\u6237\u4EE3\u7801\u4E2D\u4F7F\u7528Fade Animator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u6709Fade Animator Mixin\u5E94\u7528\u4E8E\u63A7\u4EF6\u65F6\uFF0C\u63A7\u4EF6\u80FD\u591F\u5C06\u5176\u900F\u660E\u5EA6\u503C\u4ECE\u4E00\u4E2A\u8BBE\u5B9A\u503C\u5230\u53E6\u4E00\u4E2A\u8BBE\u5B9A\u503C\u7684\u53D8\u5316\u8FC7\u7A0B\u5236\u4F5C\u6210\u52A8\u753B\u3002 \u5728\u672C\u8282\u4E2D\uFF0C\u5C06\u63D0\u4F9B\u5982\u4F55\u4F7F\u7528\u6B64\u65B0\u529F\u80FD\u7684\u6F14\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\u5BF9Box\u63A7\u4EF6\u542F\u7528Fade Animator Mixin\u540E\uFF0C\u65B9\u6CD5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startFadeAnimation`), `\u53EF\u4F9B\u4F7F\u7528\u3002 \u6B64\u65B9\u6CD5\u6309\u4EE5\u4E0B\u987A\u5E8F\u91C7\u7528\u4E863\u4E2A\u53C2\u6570\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `endAlpha\uFF1A\u52A8\u753B\u5B8C\u6210\u65F6\u63A7\u4EF6\u5E94\u5F53\u5177\u6709\u7684\u900F\u660E\u5EA6\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `duration\uFF1A\u52A8\u753B\u8FBE\u5230\u65B0\u7684\u900F\u660E\u5EA6\u503C\u8BBE\u7F6E\u5E94\u8017\u8D39\u7684\u65F6\u95F4\uFF0C\u4EE5tick\u4E3A\u5355\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `alphaProgressionEquation\uFF1A\u5E94\u5F53\u5BF9\u900F\u660E\u5EA6\u503C\u53D8\u5316\u901F\u7387\u4F7F\u7528\u7684EasingEquation\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528\u7EBF\u6027EasingEquation\u65F6\uFF0C\u900F\u660E\u5EA6\u503C\u572840 tick\u7684\u65F6\u95F4\u5185\u53D8\u4E3A0\u7684\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    box.startFadeAnimation(0, 40, EasingEquations::linearEaseNone);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `linearEaseNone`), ` easing equation is the default, so you don't have to supply that as argument.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "callback-implementation-in-user-code-1"
  }), `\u7528\u6237\u4EE3\u7801\u4E2D\u7684\u56DE\u8C03\u5B9E\u73B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53Fade Animator Mixin\u5B8C\u6210\u52A8\u753B\u65F6\uFF0C\u53D1\u9001\u56DE\u8C03\u3002 \u5728\u672C\u8282\u4E2D\uFF0C\u5C06\u6F14\u793A\u5982\u4F55\u5B9E\u73B0\u6B64\u56DE\u8C03\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\u5BF9Box\u63A7\u4EF6\u542F\u7528Fade Animator Mixin\u540E\uFF0C\u4E0B\u4E00\u6B65\u662F\u4E3A\u56DE\u8C03\u548C\u51FD\u6570\u6DFB\u52A0\u58F0\u660E\uFF0C\u4EE5\u4FBF\u5904\u7406\u7EE7\u627F\u81EA\u57FA\u7C7B\uFF08Box\u63A7\u4EF6\u7684\u4F4D\u7F6E\u6240\u5728\uFF09\u7684Screen header\u7C7B\u6587\u4EF6\u4E2D\u7684\u4E8B\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u540E\uFF0C\u9700\u8981\u5C06\u5904\u7406\u4E8B\u4EF6\u7684\u56DE\u8C03\u58F0\u660E\u548C\u51FD\u6570\u7ED1\u5B9A\u5230\u89C6\u56FE\u5BF9\u8C61\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u4E00\u6B65\u662F\u544A\u77E5Box\u63A7\u4EF6\u5728\u5176\u79FB\u52A8\u52A8\u753B\u7ED3\u675F\u65F6\u8981\u4F7F\u7528\u54EA\u4E2A\u56DE\u8C03\uFF0C\u8FD9\u662F\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), `\u5B8C\u6210\u7684\uFF0C\u76EE\u7684\u662F\u786E\u4FDD\u5728\u6BCF\u6B21\u8FDB\u5165\u5C4F\u5E55\u65F6\u90FD\u8BBE\u7F6E\u4E86\u56DE\u8C03\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u540E\u4E00\u6B65\u662F\u5B9E\u73B0\u51FD\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `boxFadeAnimationEndedHandler`), `\uFF0C\u5B83\u5C06\u5904\u7406\u56DE\u8C03\u3002 \u6700\u597D\u786E\u8BA4\u6E10\u9690\u52A8\u753B\u5DF2\u7ED3\u675F\u7684Box\u786E\u5B9E\u662F\u8BE5\u201C\u65B9\u5757\u201D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
  }), `API\u53C2\u8003`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_fade_animator",
    mdxType: "Link"
  }, "FadeAnimator\u7C7B\u7684API\u53C2\u8003"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "clicklistener"
  }), `ClickListener`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Click Listener Mixin\u7528\u56DE\u8C03\u6269\u5C55\u63A7\u4EF6\uFF0C\u4F7F\u63A7\u4EF6\u80FD\u591F\u54CD\u5E94\u89E6\u63A7\u8F93\u5165\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\uFF0C\u53EF\u901A\u8FC7\u5728\u201CMixin\u201D\u533A\u57DF\u4E2D\u7ED9\u5B9A\u63A7\u4EF6\u7684\u5C5E\u6027\u4E2D\u542F\u7528Mixin\u6765\u5E94\u7528\u5B83\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-click-listener-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u542F\u7528\u4E86Click Listener Mixin"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u542F\u7528Click Listener Mixin\u4F1A\u66F4\u6539\u751F\u6210\u7684\u63A7\u4EF6\u7684\u58F0\u660E\u7B7E\u540D\uFF08\u5982\u4E0B\u6587\u6240\u793A\uFF09\uFF0C\u5176\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `Box`), `\u542F\u7528\u4E86Click Listener Mixin\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::ClickListener< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "callback-implementation-in-user-code-2"
  }), `\u7528\u6237\u4EE3\u7801\u4E2D\u7684\u56DE\u8C03\u5B9E\u73B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Click Listener Mixin\u63A5\u6536\u89E6\u63A7\u4E8B\u4EF6\uFF0C\u53D1\u9001\u56DE\u8C03\u3002 \u5728\u672C\u8282\u4E2D\uFF0C\u5C06\u6F14\u793A\u5982\u4F55\u5B9E\u73B0\u6B64\u56DE\u8C03\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\u5BF9Box\u63A7\u4EF6\u542F\u7528Click Listener Mixin\u540E\uFF0C\u4E0B\u4E00\u6B65\u662F\u4E3A\u56DE\u8C03\u548C\u51FD\u6570\u6DFB\u52A0\u58F0\u660E\uFF0C\u4EE5\u4FBF\u5904\u7406\u7EE7\u627F\u81EA\u57FA\u7C7B\uFF08Box\u5C0F\u90E8\u4EF6\u7684\u4F4D\u7F6E\u6240\u5728\uFF09\u7684Screen header\u7C7B\u6587\u4EF6\u4E2D\u7684\u4E8B\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56DE\u8C03\u5E94\u58F0\u660E\u4E09\u70B9\uFF1A\u8981\u7ED1\u5B9A\u7684\u7C7B\u7C7B\u578B\uFF0C\u56DE\u8C03\u6E90\u81EA\u54EA\u4E2A\u63A7\u4EF6\uFF0C\u4EE5\u53CA\u53D1\u751F\u7684\u4E8B\u4EF6\u7684\u7C7B\u578B\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u5B83\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `const Box&`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `const ClickEvent&`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u540E\uFF0C\u9700\u8981\u5C06\u5904\u7406\u4E8B\u4EF6\u7684\u56DE\u8C03\u58F0\u660E\u548C\u51FD\u6570\u7ED1\u5B9A\u5230\u89C6\u56FE\u5BF9\u8C61\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u4E00\u6B65\u662F\u544A\u77E5Box\u63A7\u4EF6\u5728\u5176\u88AB\u89E6\u6478\u65F6\u8981\u4F7F\u7528\u54EA\u4E2A\u56DE\u8C03\uFF0C\u8FD9\u662F\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), `\u5B8C\u6210\u7684\uFF0C\u76EE\u7684\u662F\u786E\u4FDD\u5728\u6BCF\u6B21\u8FDB\u5165\u5C4F\u5E55\u65F6\u90FD\u8BBE\u7F6E\u4E86\u56DE\u8C03\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u540E\u4E00\u6B65\u662F\u5B9E\u73B0\u51FD\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `boxClickHandler`), `\uFF0C\u5B83\u5C06\u5904\u7406\u56DE\u8C03\u3002 \u6700\u597D\u786E\u8BA4\u53D1\u8D77\u56DE\u8C03\u7684Box\u786E\u5B9E\u662F\u8BE5\u201C\u65B9\u5757\u201D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
  }), `API\u53C2\u8003`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_click_listener",
    mdxType: "Link"
  }, "ClickListener\u7C7B\u7684API\u53C2\u8003"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "draggable"
  }), `Draggable`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Draggable mixin\u4F7F\u63A7\u4EF6\u80FD\u591F\u901A\u8FC7\u89E6\u63A7\u8F93\u5165\u88AB\u56DB\u5904\u62D6\u62FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\uFF0C\u53EF\u901A\u8FC7\u5728\u201CMixin\u201D\u533A\u57DF\u4E2D\u7ED9\u5B9A\u63A7\u4EF6\u7684\u5C5E\u6027\u4E2D\u542F\u7528Mixin\u6765\u5E94\u7528\u5B83\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-draggable-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u542F\u7528\u4E86Draggable Mixin"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u542F\u7528Draggable Mixin\u4F1A\u66F4\u6539\u751F\u6210\u7684\u5C0F\u90E8\u4EF6\u7684\u58F0\u660E\u7B7E\u540D\uFF08\u5982\u4E0B\u6587\u6240\u793A\uFF09\uFF0C\u5176\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `Box`), `\u542F\u7528\u4E86Click Listener Mixin\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::Draggable< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "api-reference-3"
  }), `API\u53C2\u8003`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_draggable",
    mdxType: "Link"
  }, "Draggable\u7C7B\u7684API\u53C2\u8003"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
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
  }, "\u53EF\u7528EasingEquation\u7684API\u53C2\u8003")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "https://easings.net/",
    mdxType: "Link"
  }, "Graphical demonstrations of EasingEquations"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);