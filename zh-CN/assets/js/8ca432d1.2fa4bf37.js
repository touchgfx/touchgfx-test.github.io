"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5232],{

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

/***/ 43470:
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
  id: "images-view",
  title: "\u56FE\u50CF\u89C6\u56FE"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/images-view",
  "id": "development/ui-development/designer-user-guide/images-view",
  "title": "\u56FE\u50CF\u89C6\u56FE",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/images-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/images-view",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/images-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "images-view",
    "title": "\u56FE\u50CF\u89C6\u56FE"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u753B\u5E03\u89C6\u56FE",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/canvas-view"
  },
  "next": {
    "title": "\u6587\u672C\u89C6\u56FE",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/texts-view"
  }
};
const assets = {};

const toc = [{
  value: "\u6811\u89C6\u56FE",
  id: "tree-view",
  level: 2
}, {
  value: "\u8868\u89C6\u56FE",
  id: "table-view",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u56FE\u50CF\u89C6\u56FE\u201D\u7528\u4E8E\u7BA1\u7406TouchGFX\u5E94\u7528\u4E2D\u4F7F\u7528\u7684\u56FE\u50CF (\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets\\images`), ` \u6587\u4EF6\u5939)\u3002 \u5B83\u5305\u542B2\u90E8\u5206\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#tree-view"
  }), `\u6811\u89C6\u56FE`), `\uFF08\u5DE6\u4FA7\uFF09\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#table-view"
  }), `\u8868\u89C6\u56FE`), `\uFF08\u53F3\u4FA7\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56FE\u50CF\u7684\u9ED8\u8BA4\u8BBE\u7F6E\u503C\u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view"
  }), `\u914D\u7F6E\u89C6\u56FE`), `\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view#default-image-configuration"
  }), `\u9ED8\u8BA4\u56FE\u50CF\u8BBE\u7F6E`), `\u4E2D\u4FEE\u6539\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-view-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u7684\u56FE\u50CF\u89C6\u56FE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "tree-view"
  }), `\u6811\u89C6\u56FE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6811\u89C6\u56FE\u63D0\u4F9B\u5E94\u7528\u4E2D\u7684\u56FE\u50CF\u53CA\u76F8\u5173\u6587\u4EF6\u5939\u7684\u603B\u89C8\u3002 \u53EF\u901A\u8FC7\u62D6\u653E\u7F51\u683C\u5206\u5272\u6761\u6765\u4FEE\u6539\u6811\u89C6\u56FE\u7684\u5BBD\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-tree-view-4.17.png",
    mdxType: "Figure"
  }, "\u56FE\u50CF\u89C6\u56FE\u4E2D\u7684\u6811\u89C6\u56FE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EF\u4EE5\u6DFB\u52A0\u56FE\u50CF\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets\\images`), ` \u6587\u4EF6\u5939\uFF0C\u65B9\u6CD5\u662F\u70B9\u51FB\u5E26\u201C+\u201D\u7684\u84DD\u8272\u6309\u94AE\uFF0C\u6216\u8005\u5C06\u56FE\u50CF\u4ECE\u6587\u4EF6\u7BA1\u7406\u5668\u76F4\u63A5\u62D6\u653E\u5230\u6811\u89C6\u56FE\u4E2D\u3002 \u52A0\u5165\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets\\images`), ` \u6587\u4EF6\u5939\u4E2D\u56FE\u50CF\u5C06\u4F1A\u81EA\u52A8\u663E\u793A\u5728\u56FE\u50CF\u7BA1\u7406\u5668\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB\u6587\u4EF6\u5939\u8282\u70B9\uFF0C\u8BE5\u6587\u4EF6\u5939\u4E2D\u7684\u56FE\u50CF\uFF08\u70B9\u51FB\u6839\u6587\u4EF6\u5939\u201Cimages\u201D\u5C06\u663E\u793A\u5E94\u7528\u4E2D\u7684\u6240\u6709\u56FE\u50CF\uFF0C\u5305\u62EC\u5B50\u6587\u4EF6\u5939\u4E2D\u7684\u56FE\u50CF\uFF09\u5C06\u663E\u793A\u5728\u8868\u89C6\u56FE\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB\u56FE\u50CF\u8282\u70B9\u8FD8\u5C06\u5728\u8868\u89C6\u56FE\u4E2D\u663E\u793A\u540C\u4E00\u6587\u4EF6\u5939\u4E0B\u7684\u5176\u4ED6\u56FE\u50CF\uFF0C\u9009\u4E2D\u5B83\u53EF\u5728\u53F3\u4FA7\u5C5E\u6027\u89C6\u56FE\u4E2D\u4FEE\u6539\u5176\u5C5E\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB\u6587\u4EF6\u5939\u65C1\u8FB9\u7684>/V\u5F62\u6807\u8BB0\u5C06\u5C55\u5F00/\u6298\u53E0\u6587\u4EF6\u5939\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB\u6811\u89C6\u56FE\u8FB9\u7EBF\u7684>/<\u5F62\u6807\u8BB0\u5C06\u5C55\u5F00/\u6298\u53E0\u6811\u89C6\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "table-view"
  }), `\u8868\u89C6\u56FE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8868\u89C6\u56FE\u663E\u793A\u5F53\u524D\u9009\u4E2D\u7684\u6587\u4EF6\u5939\u4E2D\u7684\u56FE\u50CF\u5217\u8868\uFF0C\u5176\u4E2D\u4E0D\u540C\u5217\u5BF9\u5E94\u56FE\u50CF\u7684\u76F8\u5E94\u5C5E\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7\u9009\u4E2D\u56FE\u50CF\u884C\u7B2C\u4E00\u5217\u4E2D\u7684\u590D\u9009\u6846\uFF0C\u53EF\u9009\u4E2D\u4E00\u884C\u6216\u591A\u884C\u56FE\u50CF\u3002 \u5C5E\u6027\u4FEE\u6539\u5C06\u5E94\u7528\u4E8E\u6240\u6709\u9009\u4E2D\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5355\u5143\u683C\u7684\u503C\u53D8\u4E3A\u7070\u8272\u65F6\uFF0C\u8868\u793A\u4F7F\u7528\u4E86\u9ED8\u8BA4\u503C\u3002 \u5982\u679C\u56FE\u50CF\u8BBE\u7F6E\u4E86\u660E\u786E\u7684\u5C5E\u6027\u503C\uFF0C\u4F8B\u5982\u5C06\u9ED8\u8BA4\u56FE\u50CF\u683C\u5F0F\u503C\u4FEE\u6539\u4E3AARGB8888\uFF0C\u5355\u5143\u683C\u5C06\u53D8\u6697\u3002 \u9ED8\u8BA4\u503C\u53EF\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view"
  }), `\u201C\u914D\u7F6E\u89C6\u56FE\u201D`), `\u4E2D\u8BBE\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-table-view-4.17.png",
    mdxType: "Figure"
  }, "\u56FE\u50CF\u89C6\u56FE\u4E2D\u7684\u8868\u89C6\u56FE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u56FE\u50CF\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u56FE\u50CF\u9884\u89C8\u3002 \u5C06\u9F20\u6807\u60AC\u505C\u5728\u56FE\u50CF\u9884\u89C8\u4E0A\u5C06\u663E\u793A\u5168\u5C3A\u5BF8\u9884\u89C8\u3002 \u70B9\u51FB\u9884\u89C8\u5C06\u5728.png\u56FE\u50CF\u5173\u8054\u7684\u9ED8\u8BA4\u5E94\u7528\uFF08\u5982paint.net\uFF09\u4E2D\u6253\u5F00\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u540D\u79F0\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u6587\u4EF6\u5939\u4E2D\u56FE\u50CF\u7684\u540D\u79F0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u4F7F\u7528\u6B21\u6570\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u56FE\u50CF\u7684\u4F7F\u7528\u6B21\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5C3A\u5BF8\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u56FE\u50CF\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u56FE\u50CF\u683C\u5F0F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u56FE\u50CF\u7684\u683C\u5F0F\u3002 \u53EF\u7528\u9009\u9879\u968F\u786C\u4EF6\u662F\u5426\u652F\u6301\u800C\u53D8\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6296\u8272\u7B97\u6CD5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u7528\u4EE5\u8BBE\u7F6E\u5BF9\u9009\u4E2D\u56FE\u50CF\u4F7F\u7528\u7684\u6296\u8272\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `0 - \u4E0D\u6296\u8272: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5BF9\u56FE\u50CF\u4E0D\u4F7F\u7528\u6296\u8272\u7B97\u6CD5\u3002 \u7531\u4E8E\u4E0D\u4F7F\u7528\u56FE\u50CF\u5904\u7406\uFF0C\u6240\u4EE5\u8BE5\u8BBE\u7F6E\u6027\u80FD\u6700\u9AD8\u3002 \u7136\u800C\uFF0C\u5F53\u8272\u6DF1\u8F83\u4F4E\u65F6\u53EF\u80FD\u4F1A\u770B\u5230\u56FE\u50CF\u8D28\u91CF\u4E0B\u964D\uFF0C\u8FD9\u5177\u4F53\u53D6\u51B3\u4E8E\u56FE\u50CF\u672C\u8EAB\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1 - \u5F17\u6D1B\u4F0A\u5FB7-\u65AF\u5766\u4F2F\u683C\u7B97\u6CD5: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5C06\u8BEF\u5DEE\u6269\u6563\u4E8E\u76F8\u90BB\u50CF\u7D20\uFF0C\u7EC6\u7C92\u5EA6\u6296\u8272\uFF0C\u4F46\u4F1A\u727A\u7272\u6E05\u6670\u5EA6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `2 - \u8D3E\u7EF4\u65AF, \u6731\u8FEA\u65AF\u548C\u5C3C\u514B\u7B97\u6CD5\uFF1A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u4E0E\u5F17\u6D1B\u4F0A\u5FB7-\u65AF\u5766\u4F2F\u683C\u7B97\u6CD5\u76F8\u6BD4\uFF0C\u4F1A\u5C06\u8BEF\u5DEE\u8FDB\u4E00\u6B65\u6269\u6563\u5230\u66F4\u8FDC\u50CF\u7D20\uFF0C\u56E0\u6B64\u6296\u8272\u66F4\u7C97\u7CD9\uFF0C\u4F46\u56FE\u50CF\u66F4\u6E05\u6670\u3002 \u662F3\u79CD\u8BEF\u5DEE\u6269\u6563\u6296\u8272\u7B97\u6CD5\u4E2D\u6700\u6162\u7684\u4E00\u79CD\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `3 - \u65AF\u5854\u57FA\u7B97\u6CD5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u57FA\u4E8E\u6700\u5C0F\u5E73\u5747\u8BEF\u5DEE\u6296\u8272\uFF0C\u4F46\u66F4\u5FEB\u66F4\u6E05\u6670\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u963F\u5C14\u6CD5\u6296\u8272\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u8BBE\u7F6E\u662F\u5426\u7528\u963F\u5C14\u6CD5\u901A\u9053\u4F7F\u7528\u6296\u8272\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E03\u5C40\u65CB\u8F6C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u56FE\u50CF\u4F7F\u7528\u7684\u6296\u8272\u7B97\u6CD5\u3002 \u53EF\u7528\u9009\u9879\u968F\u5DE5\u7A0B\u9009\u5B9A\u7684\u8272\u6DF1\u800C\u53D8\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5B58\u50A8\u533A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u56FE\u50CF\u5728\u76EE\u6807\u786C\u4EF6\u4E0A\u7684\u5B58\u50A8\u4F4D\u7F6E\u3002 \u53EF\u7528\u533A\u57DF\u53D6\u51B3\u4E8E\u521B\u5EFA\u5DE5\u7A0B\u65F6\u4F7F\u7528\u7684TouchGFX\u677F\u8BBE\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u989D\u5916\u5B58\u50A8\u533A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u5728\u4F7F\u7528L8\u56FE\u50CF\u683C\u5F0F\u65F6\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u5C06\u989C\u8272\u8868\u5B58\u50A8\u5728\u53E6\u4E00\u4E2A\u5B58\u50A8\u4F4D\u7F6E\u3002 \u53EF\u7528\u533A\u57DF\u53D6\u51B3\u4E8E\u521B\u5EFA\u5DE5\u7A0B\u65F6\u4F7F\u7528\u7684TouchGFX\u677F\u8BBE\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-view-menu-4.17.png",
    mdxType: "Figure"
  }, "\u56FE\u50CF\u89C6\u56FE\u4E2D\u8868\u89C6\u56FE\u91CC\u7B2C\u4E00\u4E2A\u5355\u5143\u683C\u4E2D\u7684\u4E0B\u62C9\u83DC\u5355"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u8868\u89C6\u56FE\u5DE6\u4FA7\u7B2C\u4E00\u4E2A\u5355\u5143\u683C\u4E2D\u7684\u590D\u9009\u6846\u53EF\u9009\u4E2D\u591A\u884C\u56FE\u50CF\u3002 \u8BE5\u5355\u5143\u683C\u8FD8\u5305\u542B\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\uFF0C\u5176\u4E2D\u6709\u56DB\u4E2A\u9009\u9879\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u590D\u5236\u56FE\u50CFID`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u590D\u5236\u53EF\u5728\u4EE3\u7801\u4E2D\u5F15\u7528\u7684\u56FE\u50CF\u7684ID`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5220\u9664`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u5220\u9664\u76F8\u5173\u6587\u4EF6\u5939\u4E2D\u7684\u56FE\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6253\u5F00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u5728.png\u56FE\u50CF\u5173\u8054\u7684\u9ED8\u8BA4\u5E94\u7528\u4E2D\u6253\u5F00\u56FE\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6253\u5F00\u6587\u4EF6\u5939`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u5728\u6587\u4EF6\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5305\u542B\u56FE\u50CF\u7684\u6587\u4EF6\u5939`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53F3\u952E\u5355\u51FB\u56FE\u50CF\u76F8\u5E94\u884C\uFF0C\u4E5F\u53EF\u4EE5\u6253\u5F00\u6B64\u4E0B\u62C9\u83DC\u5355\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);