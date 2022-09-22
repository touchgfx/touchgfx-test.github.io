"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3329],{

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

/***/ 91647:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
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
  id: "graphics-engine",
  title: "\u5716\u5F62\u5F15\u64CE"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/graphics-engine",
  "id": "basic-concepts/graphics-engine",
  "title": "\u5716\u5F62\u5F15\u64CE",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/graphics-engine.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/graphics-engine",
  "permalink": "/4.20/zh-TW/docs/basic-concepts/graphics-engine",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "graphics-engine",
    "title": "\u5716\u5F62\u5F15\u64CE"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5F71\u50CF\u7DE9\u885D\u5340",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/framebuffer"
  },
  "next": {
    "title": "\u4E3B\u8FF4\u5708",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/rendering"
  }
};
const assets = {};


const toc = [{
  value: "\u5834\u666F\u6A21\u578B",
  id: "scene-model",
  level: 2
}, {
  value: "\u64CD\u7E31\u6A21\u578B",
  id: "manipulate-the-model",
  level: 2
}, {
  value: "\u767C\u51FA\u7E6A\u88FD\u6307\u4EE4",
  id: "issue-drawing-commands",
  level: 2
}, {
  value: "\u4E3B\u8FF4\u5708",
  id: "main-loop",
  level: 2
}, {
  value: "\u5E73\u81FA\u529F\u80FD",
  id: "platform-adaptibility",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5716\u5F62\u5F15\u64CE\u7684\u4E3B\u8981\u8CAC\u4EFB\u662F\u5728\u5D4C\u5165\u5F0F\u8A2D\u5099\u7684\u986F\u793A\u5668\u4E0A\u7E6A\u88FD\u5716\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u5C07\u63D0\u4F9BTouchGFX\u5716\u5F62\u5F15\u64CE\u985E\u578B\u7684\u6982\u8FF0\u53CA\u5176\u5DE5\u4F5C\u539F\u7406\u7684\u4E00\u4E9B\u80CC\u666F\u77E5\u8B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "scene-model"
  }), `\u5834\u666F\u6A21\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u5F62\u5F15\u64CE\u4E3B\u8981\u53EF\u5206\u70BA\u5169\u985E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5373\u6642\u6A21\u5F0F\u5716\u5F62\u5F15\u64CE`), `\u63D0\u4F9B\u4E00\u500BAPI\uFF0C\u4F7F\u61C9\u7528\u80FD\u5920\u76F4\u63A5\u70BA\u986F\u793A\u5668\u7E6A\u88FD\u5716\u50CF\u3002 \u61C9\u7528\u8CA0\u8CAC\u78BA\u4FDD\u5728\u6B63\u78BA\u7684\u6642\u9593\u555F\u52D5\u6B63\u78BA\u7684\u7E6A\u88FD\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u4FDD\u7559\u6A21\u5F0F\u5716\u5F62\u5F15\u64CE`), `\u4F7F\u4F7F\u7528\u8005\u80FD\u5920\u64CD\u7E31\u6240\u986F\u793A\u5143\u4EF6\u7684\u62BD\u8C61\u6A21\u578B\u3002 \u5F15\u64CE\u8CA0\u8CAC\u5728\u5408\u9069\u7684\u6642\u9593\u5C07\u6B64\u5143\u4EF6\u6A21\u578B\u8F49\u5316\u70BA\u6B63\u78BA\u7684\u5716\u5F62\u7E6A\u88FD\u64CD\u4F5C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u9075\u5FAA\u4FDD\u7559\u6A21\u5F0F\u7E6A\u5716\u539F\u5247\u3002 \u7C21\u800C\u8A00\u4E4B\uFF0CTouchGFX\u63D0\u4F9B\u4F7F\u7528\u8005\u53EF\u64CD\u7E31\u7684\u6A21\u578B\uFF0C\u7136\u5F8CTouchGFX\u8CA0\u8CAC\u5C07\u6B64\u6A21\u578B\u8F49\u5316\u70BA\u6E32\u67D3\u65B9\u6CD5\u547C\u53EB\u7684\u512A\u5316\u96C6\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/retained-mode-graphics2.svg",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "\u4FDD\u7559\u6A21\u5F0F\u5716\u5F62\u5F15\u64CE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4FDD\u7559TouchGFX\u6709\u8A31\u591A\u512A\u52E2\u3002 \u4E3B\u8981\u5305\u62EC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6613\u7528\u6027\uFF1A`), `\u4FDD\u7559\u5716\u5F62\u5F15\u64CE\u6613\u65BC\u4F7F\u7528\u3002 \u4F7F\u7528\u8005\u901A\u904E\u547C\u53EB\u5167\u90E8\u6A21\u578B\u4E0A\u7684\u65B9\u6CD5\u5B9A\u5740\u87A2\u5E55\u4E0A\u7684\u5143\u4EF6\u914D\u7F6E\uFF0C\u800C\u4E0D\u8003\u616E\u5BE6\u969B\u7684\u7E6A\u88FD\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6027\u80FD\uFF1A`), `TouchGFX\u5206\u6790\u5834\u666F\u6A21\u578B\uFF0C\u4E26\u512A\u5316\u5728\u87A2\u5E55\u4E0A\u5BE6\u73FE\u6A21\u578B\u6240\u9700\u7684\u7E6A\u88FD\u547C\u53EB\u3002 \u9019\u5305\u62EC\u7279\u610F\u4E0D\u7E6A\u88FD\u96B1\u85CF\u5143\u4EF6\uFF0C\u53EA\u7E6A\u88FD\u548C\u50B3\u8F38\u5143\u4EF6\u6709\u8B8A\u5316\u7684\u90E8\u5206\uFF0C\u4EE5\u53CA\u7BA1\u7406\u5F71\u50CF\u7DE9\u885D\u7B49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u72C0\u614B\u7BA1\u7406\uFF1A`), ` TouchGFX\u6301\u7E8C\u8FFD\u8E64\u5834\u666F\u6A21\u578B\u4E2D\u7684\u6D3B\u8E8D\u90E8\u5206\u3002 \u9019\u53CD\u904E\u4F86\u70BA\u4F7F\u7528\u8005\u512A\u5316\u5834\u666F\u6A21\u578B\u5167\u5BB9\u63D0\u4F9B\u4E86\u4FBF\u5229\u6027\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4FDD\u7559\u6A21\u5F0F\u5716\u5F62\u65B9\u6848\u7684\u4E3B\u8981\u4E0D\u8DB3\u4E4B\u8655\u5728\u65BC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u8A18\u61B6\u9AD4\u6D88\u8017\uFF1A`), `\u5448\u73FE\u5834\u666F\u6A21\u578B\u6703\u4F54\u7528\u4E00\u4E9B\u5B58\u5132\u7A7A\u9593\u3002 TouchGFX\u901A\u904E\u5206\u6790\u5834\u666F\u6A21\u578B\u548C\u512A\u5316\u76F8\u61C9\u6E32\u67D3\u6210\u679C\u9054\u5230\u5176\u6027\u80FD\u6C34\u6E96\uFF0C\u901A\u5E38\u6BCF\u79D2\u6E32\u67D360\u5E40\u3002 \u70BA\u4E86\u6E1B\u5C11TouchGFX\u5834\u666F\u6A21\u578B\u4F7F\u7528\u7684\u5B58\u5132\u7A7A\u9593\uFF0CTouchGFX\u8A2D\u8A08\u8005\u505A\u4E86\u5927\u91CF\u52AA\u529B\u3002 \u5728\u5178\u578B\u61C9\u7528\u4E2D\uFF0C\u8A72\u6A21\u578B\u6240\u9700\u7684\u5B58\u5132\u7A7A\u9593\u9060\u4F4E\u65BC1\u5343\u4F4D\u5143\u7D44\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "manipulate-the-model"
  }), `\u64CD\u7E31\u6A21\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5834\u666F\u6A21\u578B\u7531\u5143\u4EF6\u7D44\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/scene-model.svg",
    noShadow: "true",
    width: 280,
    mdxType: "Figure"
  }, "\u5C0F\u5DE5\u5177\u6A39"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6A21\u578B\u4E2D\u7684\u6BCF\u500B\u5143\u4EF6\u90FD\u53EA\u6709\u4E00\u500B\u95DC\u806F\u7684\u7236\u5143\u4EF6\u3002 \u7236\u5143\u4EF6\u672C\u8EAB\u4E5F\u662F\u5834\u666F\u6A21\u578B\u7684\u4E00\u90E8\u5206\u3002 \u9019\u6A23\u7684\u4E00\u500B\u6A21\u578B\u7D71\u7A31\u70BA\u4E00\u68F5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Tree_(data_structure)"
  }), `\u6A39`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u901A\u5E38\u6703\u5C07\u6B64\u6A39\u4E2D\u7684\u5143\u4EF6\u7A31\u70BAUI\u5143\u4EF6\u6216\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F9E\u61C9\u7528\u7684\u89D2\u5EA6\u4F86\u770B\uFF0C\u5C07\u901A\u904E\u8A2D\u7F6E\u548C\u64CD\u7E31\u5834\u666F\u6A21\u578B\u4E2D\u7684\u5C0F\u5DE5\u5177\u4F86\u66F4\u65B0\u986F\u793A\u7684\u5716\u5F62\u3002 \u4E0B\u9762\u662F\u4E00\u500B\u70BA\u6309\u9215\u8A2D\u7F6E\u4F4D\u7F6E\u548C\u5716\u50CF\uFF0C\u4E26\u5C07\u6309\u9215\u6DFB\u52A0\u5230\u5834\u666F\u6A21\u578B\u7684\u7BC4\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myButton.setXY(100,50);
myButton.setBitmaps(Bitmap(BITMAP_BUTTON_RELEASED_ID), Bitmap(BITMAP_BUTTON_PRESSED_ID));
add(myButton);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "issue-drawing-commands"
  }), `\u767C\u51FA\u7E6A\u88FD\u6307\u4EE4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u7D42\uFF0C\u5728\u6E32\u67D3\u5834\u666F\u6A21\u578B\u6642\uFF0CTouchGFX\u6703\u4F7F\u7528\u5B83\u7684\u7E6A\u88FDAPI\u3002 \u6B64\u7E6A\u88FDAPI\u5305\u542B\u7E6A\u88FD\u5716\u5F62\u7684\u57FA\u672C\u5143\u7D20\uFF08\u5982\u65B9\u584A\u3001\u5716\u50CF\u3001\u6587\u5B57\u3001\u7DDA\u689D\u3001\u591A\u908A\u5F62\u3001\u6709\u7D0B\u7406\u7684\u4E09\u89D2\u5F62\u7B49\uFF09\u7684\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F8B\u5982TouchGFX\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/ui-components/buttons/button"
  }), `Button`), `\u5C0F\u5DE5\u5177\uFF0C\u5728\u6E32\u67D3\u6642\uFF0C\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap"
  }), `drawPartialBitmap\u65B9\u6CD5`), `\u7E6A\u88FD\u5716\u50CF\u3002 \u5728TouchGFX\u4E2D\u7E6A\u88FD\u6309\u9215\u5C0F\u5DE5\u5177\u7684\u539F\u59CB\u7A0B\u5F0F\u78BC\u5927\u81F4\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "touchgfx/widgets/button.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Button::draw(const Rect& invalidatedArea) const
{
    // calculate the part of the bitmap to draw
    api.drawPartialBitmap(bitmap, x, y, part, alpha);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8A73\u60C5\u8ACB\u67E5\u770B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "em"
  }, `touchgfx/widgets/button.cpp`), `\u4E2D\u7684\u5BE6\u969B\u539F\u59CB\u7A0B\u5F0F\u78BC\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5305\u542B\u7E6A\u88FDAPI\u7684\u512A\u5316\u5BE6\u73FE\u3002 \u4F8B\u5982\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap"
  }), `drawPartialBitmap`), `\u65B9\u6CD5\u4F7F\u7528\u5E95\u5C64\u786C\u9AD4\uFF08Chrom-ART\uFF0C\u5982\u679C\u6709\uFF09\u7E6A\u88FD\u9EDE\u9663\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7528\u65B0\u7684\u5C0F\u5DE5\u5177\u985E\u578B\u64F4\u5C55\u5834\u666F\u6A21\u578B\u6642\uFF0C\u53EF\u4F7F\u7528\u9019\u4E9BAPI\u7E6A\u88FD\u65B9\u6CD5\u3002 \u53C3\u898B\u95DC\u65BC\u5275\u5EFA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/touchgfx-engine-features/custom-widgets"
  }), `\u81EA\u8A02\u5C0F\u5DE5\u5177`), `\u7684\u7AE0\u7BC0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7E6A\u88FDAPI\u65B9\u6CD5\u7684\u5BE6\u73FE\u662F\u5E73\u81FA\u7279\u5B9A\u7684\uFF0C\u4E26\u91DD\u5C0D\u6BCF\u7A2E\u7279\u5B9AMCU\u9032\u884C\u4E86\u9AD8\u5EA6\u512A\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "main-loop"
  }), `\u4E3B\u8FF4\u5708`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A31\u591A\u904A\u6232\u5F15\u64CE\u548C\u5716\u5F62\u5F15\u64CE\u7684\u5DE5\u4F5C\u65B9\u5F0F\uFF08\u7279\u5225\u662FTouchGFX\uFF09\u90FD\u53EF\u4EE5\u770B\u4F5C\u662F\u7121\u7DDA\u8FF4\u5708\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u7684\u4E3B\u8FF4\u5708\u4E2D\u6709\u4E09\u7A2E\u4E3B\u8981\u6D3B\u52D5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u63A1\u96C6\u4E8B\u4EF6\uFF1A`), ` \u63A1\u96C6\u89F8\u63A7\u5F0F\u87A2\u5E55\u4E8B\u4EF6\u3001\u7269\u7406\u6309\u9215\u6309\u4E0B\u4E8B\u4EF6\u548C\u4F86\u81EA\u5F8C\u81FA\u7CFB\u7D71\u7684\u6D88\u606F\u7B49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u66F4\u65B0\u5834\u666F\u6A21\u578B\uFF1A`), `\u5C0D\u63A1\u96C6\u7684\u4E8B\u4EF6\u505A\u51FA\u56DE\u61C9\uFF0C\u66F4\u65B0\u6A21\u578B\u7684\u4F4D\u7F6E\u3001\u52D5\u756B\u3001\u8272\u5F69\u548C\u5716\u50CF\u7B49`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6E32\u67D3\u5834\u666F\u6A21\u578B\uFF1A`), `\u91CD\u7E6A\u6A21\u578B\u4E2D\u5DF2\u66F4\u65B0\u7684\u90E8\u5206\uFF0C\u4E26\u4F7F\u4E4B\u986F\u793A\u5728\u986F\u793A\u5668\u4E0A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u8FF4\u5708\u7684\u5716\u89E3\u7248\u672C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/engine-cycle.png",
    noShadow: "true",
    width: 320,
    mdxType: "Figure"
  }, "\u4E3B\u8FF4\u5708"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u8FF4\u5708\u7684\u6BCF\u6B21\u57F7\u884C\u90FD\u8868\u793A\u61C9\u7528\u7684\u4E00\u500Btick\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "platform-adaptibility"
  }), `\u5E73\u81FA\u529F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BCTouchGFX\u65E8\u5728\u904B\u884C\u65BC\u6240\u6709STM32\u5D4C\u5165\u5F0F\u8A2D\u7F6E\u4E0A\uFF0C\u56E0\u6B64\u4E0A\u8FF0\u6D3B\u52D5\u53EF\u4EE5\u88AB\u5B9A\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u904E\u5C08\u7528\u62BD\u8C61\u5C64\u8655\u7406\u4E8B\u4EF6\u63A1\u96C6\u3002 \u6B64\u62BD\u8C61\u5C64\u7684\u5B9A\u5236\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `\u201CTouchGFX AL\u958B\u767C\u201D`), `\u7AE0\u7BC0\u7684\u4E3B\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u578B\u66F4\u65B0\u5B8C\u5168\u53D6\u6C7A\u65BC\u61C9\u7528\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/ui-development/ui-development-introduction"
  }), `UI\u958B\u767C`), `\u4E2D\u5305\u542B\u95DC\u65BC\u5982\u4F55\u57F7\u884C\u6B64\u66F4\u65B0\u7684\u4E3B\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F71\u50CF\u7DE9\u885D\u7684\u5716\u5F62\u6E32\u67D3\u7531TouchGFX\u8CA0\u8CAC\uFF0C\u901A\u5E38\u7121\u9700\u9032\u884C\u81EA\u8A02\u3002 \u50CF\u7D20\u5F9E\u5F71\u50CF\u7DE9\u885D\u5230\u986F\u793A\u5668\u7684\u50B3\u8F38\u662F\u5E73\u81FA\u7279\u5B9A\u7684\uFF0C\u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/board-bring-up/board-introduction"
  }), `\u201C\u958B\u767C\u677F\u555F\u52D5\u642D\u5EFA\u201D`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `\u201CTouchGFX AL\u958B\u767C\u201D`), `\u77AD\u89E3\u5982\u4F55\u91DD\u5C0D\u7279\u5B9A\u5E73\u81FA\u9032\u884C\u81EA\u8A02\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u7E7C\u7E8C\u95B1\u8B80\u4EE5\u7372\u53D6\u95DC\u65BCTouchGFX\u4E3B\u8FF4\u5708\u7684\u66F4\u591A\u8CC7\u8A0A\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);