"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3437],{

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

/***/ 34029:
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
  title: "\u56FE\u5F62\u5F15\u64CE"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/graphics-engine",
  "id": "basic-concepts/graphics-engine",
  "title": "\u56FE\u5F62\u5F15\u64CE",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/graphics-engine.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/graphics-engine",
  "permalink": "/4.20/zh-CN/docs/basic-concepts/graphics-engine",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "graphics-engine",
    "title": "\u56FE\u5F62\u5F15\u64CE"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5E27\u7F13\u51B2\u533A",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/framebuffer"
  },
  "next": {
    "title": "\u4E3B\u5FAA\u73AF",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/rendering"
  }
};
const assets = {};


const toc = [{
  value: "\u573A\u666F\u6A21\u578B",
  id: "scene-model",
  level: 2
}, {
  value: "\u64CD\u7EB5\u6A21\u578B",
  id: "manipulate-the-model",
  level: 2
}, {
  value: "\u53D1\u5E03\u7ED8\u5236\u6307\u4EE4",
  id: "issue-drawing-commands",
  level: 2
}, {
  value: "\u4E3B\u5FAA\u73AF",
  id: "main-loop",
  level: 2
}, {
  value: "\u5E73\u53F0\u529F\u80FD",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u56FE\u5F62\u5F15\u64CE\u7684\u4E3B\u8981\u7528\u9014\u662F\u5728\u5D4C\u5165\u5F0F\u8BBE\u5907\u7684\u663E\u793A\u5668\u4E0A\u7ED8\u5236\u56FE\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u5C06\u63D0\u4F9BTouchGFX\u56FE\u5F62\u5F15\u64CE\u7C7B\u578B\u7684\u6982\u8FF0\u53CA\u5176\u5DE5\u4F5C\u539F\u7406\u7684\u4E00\u4E9B\u80CC\u666F\u77E5\u8BC6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "scene-model"
  }), `\u573A\u666F\u6A21\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u5F62\u5F15\u64CE\u4E3B\u8981\u53EF\u5206\u4E3A\u4E24\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5373\u65F6\u6A21\u5F0F\u56FE\u5F62\u5F15\u64CE`), `\u63D0\u4F9B\u4E00\u4E2AAPI\uFF0C\u4F7F\u5E94\u7528\u80FD\u591F\u76F4\u63A5\u4E3A\u663E\u793A\u5668\u7ED8\u5236\u56FE\u50CF\u3002 \u5E94\u7528\u8D1F\u8D23\u786E\u4FDD\u5728\u6B63\u786E\u7684\u65F6\u95F4\u6FC0\u6D3B\u6B63\u786E\u7684\u7ED8\u5236\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u4FDD\u7559\u6A21\u5F0F\u56FE\u5F62\u5F15\u64CE`), `\u4F7F\u7528\u6237\u80FD\u591F\u64CD\u7EB5\u6240\u663E\u793A\u7EC4\u4EF6\u7684\u62BD\u8C61\u6A21\u578B\u3002 \u5F15\u64CE\u8D1F\u8D23\u5728\u5408\u9002\u7684\u65F6\u95F4\u5C06\u6B64\u7EC4\u4EF6\u6A21\u578B\u8F6C\u5316\u4E3A\u6B63\u786E\u7684\u56FE\u5F62\u7ED8\u5236\u64CD\u4F5C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u9075\u5FAA\u4FDD\u7559\u6A21\u5F0F\u7ED8\u56FE\u539F\u5219\u3002 \u7B80\u800C\u8A00\u4E4B\uFF0CTouchGFX\u63D0\u4F9B\u7528\u6237\u53EF\u64CD\u7EB5\u7684\u6A21\u578B\uFF0C\u7136\u540ETouchGFX\u8D1F\u8D23\u5C06\u6B64\u6A21\u578B\u8F6C\u5316\u4E3A\u6E32\u67D3\u65B9\u6CD5\u8C03\u7528\u7684\u4F18\u5316\u96C6\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/retained-mode-graphics2.svg",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "\u4FDD\u7559\u6A21\u5F0F\u56FE\u5F62\u5F15\u64CE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u7684retain mode\u6709\u8BB8\u591A\u4F18\u52BF\u3002 \u4E3B\u8981\u5305\u62EC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6613\u7528\u6027\uFF1A`), ` \u4FDD\u7559\u56FE\u5F62\u5F15\u64CE\u6613\u4E8E\u4F7F\u7528\u3002 \u7528\u6237\u901A\u8FC7\u8C03\u7528\u5185\u90E8\u6A21\u578B\u4E0A\u7684\u65B9\u6CD5\u76F4\u63A5\u5728\u5C4F\u5E55\u4E0A\u5BF9\u7EC4\u4EF6\u8FDB\u884C\u914D\u7F6E\uFF0C\u800C\u4E0D\u8003\u8651\u5B9E\u9645\u7684\u7ED8\u5236\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6027\u80FD\uFF1A`), `TouchGFX\u5206\u6790\u573A\u666F\u6A21\u578B\uFF0C\u5E76\u4F18\u5316\u5728\u5C4F\u5E55\u4E0A\u5B9E\u73B0\u6A21\u578B\u6240\u9700\u7684\u7ED8\u5236\u8C03\u7528\u3002 \u8FD9\u5305\u62EC\u7279\u610F\u4E0D\u7ED8\u5236\u9690\u85CF\u7EC4\u4EF6\uFF0C\u53EA\u7ED8\u5236\u548C\u4F20\u8F93\u7EC4\u4EF6\u6709\u53D8\u5316\u7684\u90E8\u5206\uFF0C\u4EE5\u53CA\u7BA1\u7406\u5E27\u7F13\u5B58\u7B49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u72B6\u6001\u7BA1\u7406\uFF1A`), `TouchGFX\u6301\u7EED\u8DDF\u8E2A\u573A\u666F\u6A21\u578B\u4E2D\u7684\u6D3B\u8DC3\u90E8\u5206\u3002 \u8FD9\u53CD\u8FC7\u6765\u4E3A\u7528\u6237\u4F18\u5316\u573A\u666F\u6A21\u578B\u5185\u5BB9\u63D0\u4F9B\u4E86\u4FBF\u5229\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4FDD\u7559\u6A21\u5F0F\u56FE\u5F62\u65B9\u6848\u7684\u4E3B\u8981\u4E0D\u8DB3\u5728\u4E8E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5B58\u50A8\u7A7A\u95F4\u6D88\u8017\uFF1A`), `\u5448\u73B0\u573A\u666F\u6A21\u578B\u4F1A\u5360\u7528\u4E00\u4E9B\u5B58\u50A8\u7A7A\u95F4\u3002 TouchGFX\u901A\u8FC7\u5206\u6790\u573A\u666F\u6A21\u578B\u548C\u4F18\u5316\u76F8\u5E94\u6E32\u67D3\u6210\u679C\u8FBE\u5230\u5176\u6027\u80FD\u6C34\u5E73\uFF0C\u901A\u5E38\u6BCF\u79D2\u6E32\u67D360\u5E27\u3002 \u4E3A\u4E86\u51CF\u5C11TouchGFX\u573A\u666F\u6A21\u578B\u4F7F\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u8BBE\u8BA1\u8005\u505A\u4E86\u5927\u91CF\u5DE5\u4F5C\u3002 \u5728\u5178\u578B\u5E94\u7528\u4E2D\uFF0C\u8BE5\u6A21\u578B\u6240\u9700\u7684\u5B58\u50A8\u7A7A\u95F4\u8FDC\u4F4E\u4E8E1\u5343\u5B57\u8282\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "manipulate-the-model"
  }), `\u64CD\u7EB5\u6A21\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u573A\u666F\u6A21\u578B\u7531\u7EC4\u4EF6\u7EC4\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/scene-model.svg",
    noShadow: "true",
    width: 280,
    mdxType: "Figure"
  }, "\u63A7\u4EF6\u6811"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6A21\u578B\u4E2D\u7684\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u53EA\u6709\u4E00\u4E2A\u5173\u8054\u7684\u7236\u7EC4\u4EF6\u3002 \u7236\u7EC4\u4EF6\u672C\u8EAB\u4E5F\u662F\u573A\u666F\u6A21\u578B\u7684\u4E00\u90E8\u5206\u3002 \u8FD9\u6837\u7684\u4E00\u4E2A\u6A21\u578B\u7EDF\u79F0\u4E3A\u4E00\u68F5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Tree_(data_structure)"
  }), `tree`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u901A\u5E38\u4F1A\u5C06\u6B64\u6811\u4E2D\u7684\u7EC4\u4EF6\u79F0\u4E3AUI\u7EC4\u4EF6\u6216\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ECE\u5E94\u7528\u7684\u89D2\u5EA6\u6765\u770B\uFF0C\u5C06\u901A\u8FC7\u8BBE\u7F6E\u548C\u64CD\u7EB5\u573A\u666F\u6A21\u578B\u4E2D\u7684\u63A7\u4EF6\u6765\u66F4\u65B0\u663E\u793A\u7684\u56FE\u5F62\u3002 \u4E0B\u9762\u662F\u4E00\u4E2A\u4E3A\u6309\u94AE\u8BBE\u7F6E\u4F4D\u7F6E\u548C\u56FE\u50CF\uFF0C\u5E76\u5C06\u6309\u94AE\u6DFB\u52A0\u5230\u573A\u666F\u6A21\u578B\u7684\u793A\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myButton.setXY(100,50);
myButton.setBitmaps(Bitmap(BITMAP_BUTTON_RELEASED_ID), Bitmap(BITMAP_BUTTON_PRESSED_ID));
add(myButton);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "issue-drawing-commands"
  }), `\u53D1\u5E03\u7ED8\u5236\u6307\u4EE4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u540E\uFF0C\u5728\u6E32\u67D3\u573A\u666F\u6A21\u578B\u65F6\uFF0CTouchGFX\u4F1A\u4F7F\u7528\u5B83\u7684\u7ED8\u5236API\u3002 \u6B64\u7ED8\u5236API\u5305\u542B\u7ED8\u5236\u56FE\u5F62\u57FA\u5143\uFF08\u5982\u65B9\u5757\u3001\u56FE\u50CF\u3001\u6587\u672C\u3001\u7EBF\u6761\u3001\u591A\u8FB9\u5F62\u3001\u6709\u7EB9\u7406\u7684\u4E09\u89D2\u5F62\u7B49\uFF09\u7684\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F8B\u5982TouchGFX\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/ui-components/buttons/button"
  }), `Button`), `\u63A7\u4EF6\uFF0C\u5728\u6E32\u67D3\u65F6\uFF0C\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap"
  }), `drawPartialBitmap`), `\u65B9\u6CD5\u7ED8\u5236\u56FE\u50CF\u3002 \u5728TouchGFX\u4E2D\u7ED8\u5236\u6309\u94AE\u5C0F\u5DE5\u5177\u7684\u6E90\u4EE3\u7801\u5927\u81F4\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
  }, `\u8BE6\u60C5\u8BF7\u67E5\u770B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "em"
  }, `touchgfx/widgets/button.cpp`), `\u4E2D\u7684\u5B9E\u9645\u6E90\u4EE3\u7801\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5305\u542B\u7ED8\u5236API\u7684\u4F18\u5316\u5B9E\u73B0\u3002 \u4F8B\u5982\uFF0C  `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap"
  }), `drawPartialBitmap`), ` \u65B9\u6CD5\u4F7F\u7528\u5E95\u5C42\u786C\u4EF6\uFF08\u5982\u679C\u6709Chrom-ART\u56FE\u50CF\u52A0\u901F\u5668\uFF09\u7ED8\u5236\u4F4D\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7528\u65B0\u7684\u63A7\u4EF6\u7C7B\u578B\u6269\u5C55\u573A\u666F\u6A21\u578B\u65F6\uFF0C\u53EF\u4F7F\u7528\u8FD9\u4E9BAPI\u7ED8\u5236\u65B9\u6CD5\u3002 \u53C2\u89C1\u5173\u4E8E\u521B\u5EFA `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/touchgfx-engine-features/custom-widgets"
  }), `custom widget`), `\u7684\u7AE0\u8282\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7ED8\u5236API\u65B9\u6CD5\u7684\u5B9E\u73B0\u662F\u5E73\u53F0\u7279\u5B9A\u7684\uFF0C\u5E76\u9488\u5BF9\u6BCF\u79CD\u7279\u5B9AMCU\u8FDB\u884C\u4E86\u9AD8\u5EA6\u4F18\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "main-loop"
  }), `\u4E3B\u5FAA\u73AF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BB8\u591A\u6E38\u620F\u5F15\u64CE\u548C\u56FE\u5F62\u5F15\u64CE\u7684\u5DE5\u4F5C\u65B9\u5F0F\uFF08\u7279\u522B\u662FTouchGFX\uFF09\u90FD\u53EF\u4EE5\u770B\u4F5C\u662F\u65E0\u9650\u5FAA\u73AF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u7684\u4E3B\u5FAA\u73AF\u4E2D\u6709\u4E09\u79CD\u4E3B\u8981\u6D3B\u52A8\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u91C7\u96C6\u4E8B\u4EF6\uFF1A`), `\u91C7\u96C6\u89E6\u6478\u5C4F\u4E8B\u4EF6\u3001\u7269\u7406\u6309\u94AE\u6309\u4E0B\u4E8B\u4EF6\u548C\u6765\u81EA\u540E\u53F0\u7CFB\u7EDF\u7684\u6D88\u606F\u7B49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u66F4\u65B0\u573A\u666F\u6A21\u578B\uFF1A`), `\u5BF9\u91C7\u96C6\u7684\u4E8B\u4EF6\u505A\u51FA\u54CD\u5E94\uFF0C\u66F4\u65B0\u6A21\u578B\u7684\u4F4D\u7F6E\u3001\u52A8\u753B\u3001\u8272\u5F69\u548C\u56FE\u50CF\u7B49`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6E32\u67D3\u573A\u666F\u6A21\u578B\uFF1A`), `\u91CD\u7ED8\u6A21\u578B\u4E2D\u5DF2\u66F4\u65B0\u7684\u90E8\u5206\uFF0C\u5E76\u4F7F\u4E4B\u663E\u793A\u5728\u663E\u793A\u5668\u4E0A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u5FAA\u73AF\u7684\u56FE\u89E3\u7248\u672C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/engine-cycle.png",
    noShadow: "true",
    width: 320,
    mdxType: "Figure"
  }, "\u4E3B\u5FAA\u73AF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u5FAA\u73AF\u7684\u6BCF\u6B21\u6267\u884C\u90FD\u8868\u793A\u5E94\u7528\u7684\u4E00\u4E2Atick\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "platform-adaptibility"
  }), `\u5E73\u53F0\u529F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8ETouchGFX\u65E8\u5728\u8FD0\u884C\u4E8E\u6240\u6709STM32\u5D4C\u5165\u5F0F\u8BBE\u7F6E\u4E0A\uFF0C\u56E0\u6B64\u4E0A\u8FF0\u6D3B\u52A8\u53EF\u4EE5\u5B9A\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u8FC7\u4E13\u7528\u62BD\u8C61\u5C42\u5904\u7406\u4E8B\u4EF6\u91C7\u96C6\u3002 \u6B64\u62BD\u8C61\u5C42\u7684\u5B9A\u5236\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `\u201CTouchGFX AL\u5F00\u53D1`), `\u201D\u90E8\u5206\u7684\u4E3B\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u578B\u66F4\u65B0\u5B8C\u5168\u53D6\u51B3\u4E8E\u5E94\u7528\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/ui-development/ui-development-introduction"
  }), `UI\u5F00\u53D1`), `\u4E2D\u5305\u542B\u5173\u4E8E\u5982\u4F55\u6267\u884C\u6B64\u66F4\u65B0\u7684\u4E3B\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E27\u7F13\u51B2\u7684\u56FE\u5F62\u6E32\u67D3\u7531TouchGFX\u8D1F\u8D23\uFF0C\u901A\u5E38\u65E0\u9700\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002 \u50CF\u7D20\u4ECE\u5E27\u7F13\u51B2\u5230\u663E\u793A\u5668\u7684\u4F20\u8F93\u662F\u5E73\u53F0\u6307\u5B9A\u7684\uFF0C\u53C2\u89C1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/board-bring-up/board-introduction"
  }), `\u201C\u677F\u542F\u52A8\u642D\u5EFA\u201D`), `\u548C\u201CTouchGFX AL\u5F00\u53D1\u201D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `\u4E86\u89E3\u5982\u4F55\u9488\u5BF9\u7279\u5B9A\u5E73\u53F0\u8FDB\u884C\u81EA\u5B9A\u4E49`), `\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BF7\u7EE7\u7EED\u9605\u8BFB\u4EE5\u83B7\u53D6\u5173\u4E8ETouchGFX\u4E3B\u5FAA\u73AF\u7684\u66F4\u591A\u4FE1\u606F\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);