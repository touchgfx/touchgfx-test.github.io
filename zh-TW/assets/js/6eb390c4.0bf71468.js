"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6062],{

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

/***/ 18852:
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
  title: "\u5716\u50CF\u8996\u5716"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/images-view",
  "id": "development/ui-development/designer-user-guide/images-view",
  "title": "\u5716\u50CF\u8996\u5716",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/images-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/images-view",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/images-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "images-view",
    "title": "\u5716\u50CF\u8996\u5716"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u756B\u5E03\u8996\u5716",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/canvas-view"
  },
  "next": {
    "title": "\u6587\u5B57\u8996\u5716",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/texts-view"
  }
};
const assets = {};

const toc = [{
  value: "\u6A39\u72C0\u5217\u8868",
  id: "tree-view",
  level: 2
}, {
  value: "\u8868\u683C\u5217\u8868",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u5716\u50CF\u8996\u5716\u201D\u7528\u65BC\u7BA1\u7406TouchGFX\u61C9\u7528\u4E2D\u4F7F\u7528\u7684\u5716\u50CF\uFF08\u4F4D\u65BC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets\\images`), `\u8CC7\u6599\u593E\uFF09\u3002 \u5B83\u5305\u542B2\u90E8\u5206\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#tree-view"
  }), `\u6A39\u72C0\u5217\u8868`), `\uFF08\u5DE6\u5074\uFF09\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#table-view"
  }), `\u8868\u683C\u5217\u8868`), `\uFF08\u53F3\u5074\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5716\u50CF\u7684\u9810\u8A2D\u914D\u7F6E\u503C\u53EF\u4EE5\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view"
  }), `Config View`), `\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view#default-image-configuration"
  }), `Default Image Configuration`), `\u4E2D\u4FEE\u6539\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-view-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u7684\u5716\u50CF\u8996\u5716"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "tree-view"
  }), `\u6A39\u72C0\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6A39\u72C0\u5217\u8868\u63D0\u4F9B\u61C9\u7528\u7A0B\u5F0F\u4E2D\u5B58\u5728\u7684\u5716\u50CF\u548C\u8CC7\u6599\u593E\u7684\u7E3D\u89BD\u3002 \u53EF\u901A\u904E\u53F3\u5074\u7684\u62D6\u66F3\u9375\u4F86\u4FEE\u6539\u6A39\u72C0\u5217\u8868\u7684\u5BEC\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-tree-view-4.17.png",
    mdxType: "Figure"
  }, "\u5716\u50CF\u8996\u5716\u4E2D\u7684\u6A39\u72C0\u5217\u8868"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EF\u4EE5\u6DFB\u52A0\u5716\u50CF\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets\\images`), ` \u8CC7\u6599\u593E\uFF0C\u65B9\u6CD5\u662F\u9EDE\u64CA\u5E36\u52A0\u865F\u7684\u85CD\u8272\u6309\u9215\uFF0C\u6216\u8005\u5C07\u5716\u50CF\u5F9E\u6A94\u6848\u7BA1\u7406\u54E1\u76F4\u63A5\u62D6\u653E\u5230TouchGFX Designer\u3002 \u52A0\u5165\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets\\images`), ` \u8CC7\u6599\u593E\u4E2D\u5716\u50CF\u5C07\u6703\u81EA\u52D5\u986F\u793A\u5728\u5716\u50CF\u7BA1\u7406\u5668\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u8CC7\u6599\u593E\u7BC0\u9EDE\uFF0C\u8A72\u8CC7\u6599\u593E\u4E2D\u7684\u5716\u50CF\uFF08\u9EDE\u64CA\u6839\u8CC7\u6599\u593E\u201Cimages\u201D\u5C07\u986F\u793A\u61C9\u7528\u4E2D\u7684\u6240\u6709\u5716\u50CF\uFF0C\u5305\u62EC\u5B50\u8CC7\u6599\u593E\u4E2D\u7684\u5716\u50CF\uFF09\u5C07\u986F\u793A\u5728\u8868\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u5716\u50CF\u7BC0\u9EDE\u9084\u5C07\u986F\u793A\u5217\u8868\u4E2D\u540C\u4E00\u8CC7\u6599\u593E\u4E0B\u7684\u5176\u4ED6\u5716\u50CF\uFF0C\u9078\u4E2D\u5B83\u53EF\u5728\u53F3\u5074\u5C6C\u6027\u5716\u4E2D\u4FEE\u6539\u5176\u5C6C\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u8CC7\u6599\u593E\u65C1\u908A\u7684V\u5F62\u6A19\u8A18\u5C07\u6298\u758A/\u5C55\u958B\u8CC7\u6599\u593E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u7BC0\u9EDE\u4E0A\u7684x\u6309\u9215\uFF0C\u53EF\u6298\u758A\u6216\u5C55\u958B\u6A39\u72C0\u8868\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "table-view"
  }), `\u8868\u683C\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5217\u8868\u986F\u793A\u7576\u524D\u9078\u4E2D\u8CC7\u6599\u593E\u4E0B\u7684\u5716\u50CF\u7684\u6E05\u55AE\uFF0C\u5176\u4E2D\u4E0D\u540C\u7684\u5217\u5C0D\u61C9\u65BC\u5716\u50CF\u7684\u4E0D\u540C\u5C6C\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u9078\u64C7\u4E00\u5E45\u6216\u591A\u5E45\u5716\u50CF\u3002 \u5C6C\u6027\u4FEE\u6539\u5C07\u61C9\u7528\u65BC\u6240\u6709\u9078\u4E2D\u7684\u5716\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u5132\u5B58\u683C\u7684\u503C\u8B8A\u70BA\u7070\u8272\u6642\uFF0C\u8868\u793A\u4F7F\u7528\u4E86\u9810\u8A2D\u503C\u3002 \u5982\u679C\u5728\u5716\u50CF\u4E0A\u8A2D\u7F6E\u4E86\u660E\u78BA\u7684\u503C\uFF0C\u4F8B\u5982\u5C07\u9810\u8A2D\u5716\u50CF\u683C\u5F0F\u503C\u4FEE\u6539\u70BAARGB8888\uFF0C\u5132\u5B58\u683C\u5C07\u8B8A\u6697\u3002 \u9810\u8A2D\u503C\u53EF\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view"
  }), `\u201CConfig View\u201D`), `\u4E2D\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-table-view-4.17.png",
    mdxType: "Figure"
  }, "\u5716\u50CF\u8996\u5716\u4E2D\u7684\u5217\u8868"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Image\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u5716\u50CF\u9810\u89BD\u3002 \u5C07\u6ED1\u9F20\u505C\u5728\u5716\u50CF\u9810\u89BD\u4E0A\u5C07\u986F\u793A\u5C3A\u5BF8\u66F4\u5927\u7684\u9810\u89BD\u3002 \u9EDE\u64CA\u9810\u89BD\u5C07\u5728.png\u5F71\u50CF\u7684\u9810\u8A2D\u61C9\u7528\u7A0B\u5F0F\uFF08\u5982paint.net\uFF09\u4E2D\u6253\u958B\u5716\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Name\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u8CC7\u6599\u593E\u4E2D\u5716\u50CF\u7684\u540D\u7A31\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Uses\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5716\u50CF\u7684\u5DF2\u4F7F\u7528\u6B21\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Size\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5716\u50CF\u7684\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Image Format\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5716\u50CF\u7684\u683C\u5F0F\u3002 \u53EF\u7528\u9078\u9805\u96A8\u786C\u9AD4\u652F\u63F4\u7684\u7279\u6027\u800C\u8B8A\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Dither Algorithm\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A2D\u7F6E\u5C0D\u9078\u4E2D\u5716\u50CF\u4F7F\u7528\u7684\u6296\u52D5\u6F14\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `0- No dither: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5C0D\u5716\u50CF\u4E0D\u4F7F\u7528\u6296\u8272\u6F14\u7B97\u6CD5\uFF0C \u7531\u65BC\u4E0D\u505A\u4EFB\u4F55\u6539\u8B8A\uFF0C\u56E0\u6B64\u9019\u662F\u6027\u80FD\u6700\u9AD8\u7684\u8A2D\u7F6E\u3002 \u4F46\u662F\uFF0C\u8272\u6DF1\u8F03\u4F4E\u6642\u53EF\u80FD\u6703\u770B\u5230\u5716\u50CF\u54C1\u8CEA\u4E0B\u964D\uFF0C\u5177\u9AD4\u53D6\u6C7A\u65BC\u5716\u50CF\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1-Floyd-Steinberg\u6F14\u7B97\u6CD5: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5C07\u8AA4\u5DEE\u64F4\u6563\u5230\u76F8\u9130\u50CF\u7D20\uFF0C\u5C0E\u81F4\u7D30\u7D30\u5FAE\u6027\u6296\u52D5\uFF0C\u4F46\u6703\u72A7\u7272\u6E05\u6670\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `2-Jarvis\u3001Judice\u548CNinke\u6F14\u7B97\u6CD5: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u8207Floyd-Steinberg\u6F14\u7B97\u6CD5\u76F8\u6BD4\uFF0C\u5C07\u8AA4\u5DEE\u9032\u4E00\u6B65\u64F4\u6563\u5230\u66F4\u9060\u50CF\u7D20\uFF0C\u56E0\u6B64\u6296\u52D5\u66F4\u7C97\u7CD9\uFF0C\u4F46\u5716\u50CF\u66F4\u6E05\u6670\u3002 3\u7A2E\u8AA4\u5DEE\u64F4\u6563\u6296\u52D5\u6F14\u7B97\u6CD5\u4E2D\u6700\u6162\u7684\u4E00\u7A2E\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `3-Stucki\u6F14\u7B97\u6CD5: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u57FA\u65BC\u6700\u5C0F\u5E73\u5747\u8AA4\u5DEE\u6296\u52D5\uFF0C\u4F46\u66F4\u5FEB\u66F4\u6E05\u6670\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Alpha Dither\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A2D\u7F6E\u662F\u5426\u901A\u904EAlpha\u901A\u9053\u4F7F\u7528\u6296\u52D5\u6F14\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Layout Rotation\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5716\u50CF\u4F7F\u7528\u7684\u6296\u52D5\u6F14\u7B97\u6CD5\u3002 \u53EF\u7528\u9078\u9805\u96A8\u5C08\u6848\u7684\u9078\u5B9A\u8272\u6DF1\u800C\u8B8A\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Section\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5716\u50CF\u5728\u76EE\u6A19\u786C\u9AD4\u4E0A\u7684\u5B58\u5132\u4F4D\u7F6E\u3002 \u53EF\u7528\u5206\u5340\u53D6\u6C7A\u65BC\u5275\u5EFA\u5C08\u6848\u6642\u4F7F\u7528\u7684TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Extra Section\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5728\u4F7F\u7528L8\u5716\u50CF\u683C\u5F0F\u6642\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u5C07\u984F\u8272\u8868\u5B58\u5132\u5728\u53E6\u4E00\u500B\u5B58\u5132\u4F4D\u7F6E\u3002 \u53EF\u7528\u5206\u5340\u53D6\u6C7A\u65BC\u5275\u5EFA\u5C08\u6848\u6642\u4F7F\u7528\u7684TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-view-menu-4.17.png",
    mdxType: "Figure"
  }, "\u5716\u50CF\u8996\u5716\u4E2D\u7B2C\u4E00\u500B\u5132\u5B58\u683C\u4E2D\u7684\u4E0B\u62C9\u5F0F\u529F\u80FD\u8868"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u5217\u8868\u5DE6\u5074\u7B2C\u4E00\u500B\u5132\u5B58\u683C\u4E2D\u7684\u6838\u53D6\u65B9\u584A\u53EF\u9078\u4E2D\u591A\u5E45\u5716\u50CF\u3002 \u8A72\u5132\u5B58\u683C\u9084\u5305\u542B\u4E00\u500B\u4E0B\u62C9\u5F0F\u529F\u80FD\u8868\uFF0C\u5176\u4E2D\u6709\u56DB\u500B\u9078\u9805\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Copy image id`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8907\u88FD\u53EF\u5728\u7A0B\u5F0F\u78BC\u4E2D\u5F15\u7528\u7684\u5716\u50CF\u7684ID`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Delete`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u522A\u9664\u76F8\u95DC\u8CC7\u6599\u593E\u4E2D\u7684\u5716\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Open`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5728.png\u5716\u50CF\u95DC\u806F\u7684\u9810\u8A2D\u61C9\u7528\u4E2D\u6253\u958B\u5716\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Open folder`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5728\u6A94\u6848\u7BA1\u7406\u54E1\u4E2D\u6253\u958B\u5305\u542B\u5716\u50CF\u7684\u8CC7\u6599\u593E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5716\u50CF\u5217\u4E2D\u9EDE\u64CA\u53F3\u9375\u4E5F\u53EF\u4EE5\u6253\u958B\u6B64\u4E0B\u62C9\u5F0F\u529F\u80FD\u8868\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);