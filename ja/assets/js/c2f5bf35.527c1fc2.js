"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1826],{

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

/***/ 49434:
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
  title: "Images View\uFF08\u753B\u50CF\u30D3\u30E5\u30FC\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/images-view",
  "id": "development/ui-development/designer-user-guide/images-view",
  "title": "Images View\uFF08\u753B\u50CF\u30D3\u30E5\u30FC\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/images-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/images-view",
  "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/images-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "images-view",
    "title": "Images View\uFF08\u753B\u50CF\u30D3\u30E5\u30FC\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Canvas View\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30D3\u30E5\u30FC\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/canvas-view"
  },
  "next": {
    "title": "Texts View\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30D3\u30E5\u30FC\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/texts-view"
  }
};
const assets = {};

const toc = [{
  value: "Tree View\uFF08\u30C4\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\uFF09",
  id: "tree-view",
  level: 2
}, {
  value: "Table View\uFF08\u30C6\u30FC\u30D6\u30EB\uFF65\u30D3\u30E5\u30FC\uFF09",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Images View\u3092\u4F7F\u7528\u3057\u3066\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3055\u308C\u308B\u753B\u50CF\u3092\u7BA1\u7406\u3057\u307E\u3059\uFF08\u753B\u50CF\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets\\images`), `\u30D5\u30A9\u30EB\u30C0\u306E\u4E0B\u306B\u3042\u308A\u307E\u3059)\u3002 \u3053\u306E\u30D3\u30E5\u30FC\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#tree-view"
  }), `Tree View`), `\uFF08\u5DE6\u5074\uFF09\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#table-view"
  }), `Table View`), `\uFF08\u53F3\u5074\uFF09\u3068\u3044\u30462\u3064\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u6210\u308A\u7ACB\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u5024\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view"
  }), `Config View`), `\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view#default-image-configuration"
  }), `Default Image Configuration`), `\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-view-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306EImages View"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "tree-view"
  }), `Tree View\uFF08\u30C4\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Tree View\u306B\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5B58\u5728\u3059\u308B\u753B\u50CF\u3068\u30D5\u30A9\u30EB\u30C0\u306E\u6982\u8981\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 Tree View\u306E\u5E45\u306F\u3001\u30E6\u30FC\u30B6\u306E\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u30B0\u30EA\u30C3\u30C9\u30B9\u30D7\u30EA\u30C3\u30BFThumb\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u3053\u3068\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-tree-view-4.17.png",
    mdxType: "Figure"
  }, "Images View\u306ETree View"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/images`), `\u30D5\u30A9\u30EB\u30C0\u306B\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001Images View\u306E\u53F3\u4E0A\u306E"+"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u304B\u3001\u30D5\u30A1\u30A4\u30EB\uFF65\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u304B\u3089Tree View\u306B\u753B\u50CF\u3092\u76F4\u63A5\u30C9\u30E9\u30C3\u30B0\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets\\images`), `\u30D5\u30A9\u30EB\u30C0\u306B\u8FFD\u52A0\u3055\u308C\u305F\u753B\u50CF\u306F\u3001Image Manager\u306B\u81EA\u52D5\u7684\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30EB\u30C0\uFF65\u30CE\u30FC\u30C9\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u305D\u306E\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u753B\u50CF\u304CTable View\u306B\u8868\u793A\u3055\u308C\u307E\u3059\uFF08\u30EB\u30FC\u30C8\uFF65\u30D5\u30A9\u30EB\u30C0\u201Cimages\u201D\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u5185\u306B\u3042\u308B\u753B\u50CF\u3092\u542B\u3081\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u3059\u3079\u3066\u306E\u753B\u50CF\u304C\u8868\u793A\u3055\u308C\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u30CE\u30FC\u30C9\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3082\u3001\u540C\u3058\u30D5\u30A9\u30EB\u30C0\u4E0B\u306B\u3042\u308B\u4ED6\u306E\u753B\u50CF\u304CTable View\u306B\u8868\u793A\u3055\u308C\u308B\u306E\u3067\u3001\u305D\u308C\u3092\u9078\u629E\u3057\u3066\u53F3\u5074\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\uFF65\u30D3\u30E5\u30FC\u3067\u305D\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30A9\u30EB\u30C0\u306E\u6A2A\u306E\u30B7\u30A7\u30D6\u30ED\u30F3\uFF08\u5C71\u5F62\u306E\u77E2\u5370\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30D5\u30A9\u30EB\u30C0\u3092\u6298\u308A\u305F\u305F\u3093\u3060\u308A\u5C55\u958B\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Tree View\u306E\u53F3\u5074\u306E\u30B7\u30A7\u30D6\u30ED\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001Tree View\u3092\u6298\u308A\u305F\u305F\u3093\u3060\u308A\u5C55\u958B\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "table-view"
  }), `Table View\uFF08\u30C6\u30FC\u30D6\u30EB\uFF65\u30D3\u30E5\u30FC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Table View\u306B\u306F\u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u30D5\u30A9\u30EB\u30C0\u306B\u3042\u308B\u753B\u50CF\u306E\u30EA\u30B9\u30C8\u304C\u8868\u793A\u3055\u308C\u3001\u3053\u3053\u306B\u306F\u753B\u50CF\u306E\u3055\u307E\u3056\u307E\u306A\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u5FDC\u3058\u3066\u7570\u306A\u308B\u5217\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76EE\u7684\u306E\u753B\u50CF\u306E\u884C\u306E\u6700\u521D\u306E\u5217\u306B\u3042\u308B\u30C1\u30A7\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u30AA\u30F3\u306B\u3059\u308B\u3053\u3068\u3067\u30011\u3064\u4EE5\u4E0A\u306E\u753B\u50CF\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002 \u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u5909\u66F4\u306F\u3001\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u753B\u50CF\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30BB\u30EB\u306E\u5024\u304C\u30B0\u30EC\u30FC\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u753B\u50CF\u306B\u660E\u78BA\u306A\u5024\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\uFF08\u305F\u3068\u3048\u3070\u3001\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092ARGB8888\u306B\u5909\u66F4\u3057\u305F\u5834\u5408\uFF09\u306F\u3001\u30BB\u30EB\u306E\u8272\u304C\u6FC3\u304F\u306A\u308A\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view"
  }), `Config View`), `\u3067\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-table-view-4.17.png",
    mdxType: "Figure"
  }, "Images\u306ETable View"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Image:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u753B\u50CF\u306E\u30D7\u30EC\u30D3\u30E5\u30FC\u3067\u3059\u3002 \u753B\u50CF\u30D7\u30EC\u30D3\u30E5\u30FC\u306E\u4E0A\u306B\u30AB\u30FC\u30BD\u30EB\u3092\u5408\u308F\u305B\u308B\u3068\u3001\u5927\u304D\u306A\u30B5\u30A4\u30BA\u3067\u30D7\u30EC\u30D3\u30E5\u30FC\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u30D7\u30EC\u30D3\u30E5\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001.png\u30A4\u30E1\u30FC\u30B8\u3068\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF08paint.net\u306A\u3069\uFF09\u3067\u753B\u50CF\u304C\u958B\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Name:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30D5\u30A9\u30EB\u30C0\u5185\u306E\u753B\u50CF\u306E\u540D\u524D\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Uses:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u753B\u50CF\u304C\u4F7F\u7528\u3055\u308C\u305F\u56DE\u6570\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Size:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u753B\u50CF\u306E\u5E45\u3068\u9AD8\u3055\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Image Format:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u753B\u50CF\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u3059\u3002 \u4F7F\u7528\u53EF\u80FD\u306A\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u5185\u5BB9\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Dither Algorithm:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9078\u629E\u3057\u305F\u753B\u50CF\u306B\u5BFE\u3057\u3066\u4F7F\u7528\u3059\u308B\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `No dither: \u753B\u50CF\u306B\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u306F\u9069\u7528\u3055\u308C\u307E\u305B\u3093\u3002 \u4F55\u3082\u5909\u66F4\u304C\u884C\u308F\u308C\u306A\u3044\u306E\u3067\u3001\u6700\u3082\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u9AD8\u3044\u8A2D\u5B9A\u3067\u3059\u3002 \u305F\u3060\u3057\u753B\u50CF\u306B\u3088\u3063\u3066\u306F\u3001\u8272\u6DF1\u5EA6\u304C\u4F4E\u3044\u5834\u5408\u306B\u753B\u50CF\u306E\u8996\u899A\u7684\u54C1\u8CEA\u304C\u4F4E\u4E0B\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1 - Floyd-Steinberg: \u96A3\u63A5\u3059\u308B\u30D4\u30AF\u30BB\u30EB\u306B\u8AA4\u5DEE\u3092\u62E1\u6563\u3055\u305B\u3001\u304D\u3081\u7D30\u304B\u3044\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u306B\u306A\u308A\u307E\u3059\u304C\u3001\u9BAE\u660E\u3055\u304C\u72A0\u7272\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `2 - Jarvis, Judice and Ninke: Floyd-Steinberg\u3088\u308A\u3082\u4E00\u6B69\u5148\u306E\u30D4\u30AF\u30BB\u30EB\u307E\u3067\u8AA4\u5DEE\u3092\u62E1\u6563\u3055\u305B\u3001\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u306E\u304D\u3081\u304C\u7C97\u304F\u306A\u308A\u307E\u3059\u304C\u3001\u9BAE\u660E\u306A\u753B\u50CF\u306B\u306A\u308A\u307E\u3059\u3002 3\u3064\u306E\u8AA4\u5DEE\u62E1\u6563\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u4E2D\u3067\u6700\u3082\u4F4E\u901F\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `3 - Stucki: \u6700\u5C0F\u9650\u306E\u5E73\u5747\u8AA4\u5DEE\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u306B\u57FA\u3065\u3044\u3066\u304A\u308A\u3001\u9AD8\u901F\u3067\u304F\u3063\u304D\u308A\u3068\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Alpha Dither:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u3092\u4ECB\u3057\u3066\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u4F7F\u7528\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Layout Rotation:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u753B\u50CF\u306B\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3002 \u9078\u629E\u53EF\u80FD\u306A\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u9078\u629E\u3055\u308C\u305F\u8272\u6DF1\u5EA6\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Section:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u753B\u50CF\u30C7\u30FC\u30BF\u304C\u4FDD\u5B58\u3055\u308C\u308B\u30E1\u30E2\u30EA\u306E\u5834\u6240\u3002 \u9078\u629E\u53EF\u80FD\u306A\u30BB\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210\u6642\u306ETouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Extra Section:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` L8\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30AB\u30E9\u30FC\uFF65\u30C6\u30FC\u30D6\u30EB\u3092\u5225\u306E\u30E1\u30E2\u30EA\u4E0A\u306E\u5834\u6240\u306B\u4FDD\u5B58\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u9078\u629E\u53EF\u80FD\u306A\u30BB\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210\u6642\u306ETouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-view-menu-4.17.png",
    mdxType: "Figure"
  }, "Images\u306ETable View\u306E\u6700\u521D\u306E\u30BB\u30EB\u306B\u3042\u308B\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\uFF65\u30E1\u30CB\u30E5\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Table View\u306E\u5DE6\u306E\u6700\u521D\u306E\u30BB\u30EB\u306B\u3042\u308B\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3057\u3066\u3001\u8907\u6570\u306E\u753B\u50CF\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30BB\u30EB\u306B\u306F\u6B21\u306E4\u3064\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u542B\u3080\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\uFF65\u30E1\u30CB\u30E5\u30FC\u3082\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Copy image id`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30B3\u30FC\u30C9\u3067\u53C2\u7167\u3067\u304D\u308B\u753B\u50CF\u306EID\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Delete`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u753B\u50CF\u3092\u524A\u9664\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Open`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` .png\u30A4\u30E1\u30FC\u30B8\u3068\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u753B\u50CF\u3092\u958B\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Open folder`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u753B\u50CF\u3092\u542B\u3080\u30D5\u30A9\u30EB\u30C0\u3092\u30D5\u30A1\u30A4\u30EB\uFF65\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u3067\u958B\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\uFF65\u30E1\u30CB\u30E5\u30FC\u306F\u3001\u5404\u753B\u50CF\u306B\u5BFE\u5FDC\u3059\u308B\u884C\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u958B\u304F\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);