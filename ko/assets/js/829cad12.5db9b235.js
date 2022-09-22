"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4897],{

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

/***/ 18367:
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
  title: "\uC774\uBBF8\uC9C0 \uBDF0"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/images-view",
  "id": "development/ui-development/designer-user-guide/images-view",
  "title": "\uC774\uBBF8\uC9C0 \uBDF0",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/images-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/images-view",
  "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/images-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "images-view",
    "title": "\uC774\uBBF8\uC9C0 \uBDF0"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uCE94\uBC84\uC2A4 \uBDF0",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/canvas-view"
  },
  "next": {
    "title": "\uD14D\uC2A4\uD2B8 \uBDF0",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/texts-view"
  }
};
const assets = {};

const toc = [{
  value: "\uD2B8\uB9AC \uBDF0",
  id: "tree-view",
  level: 2
}, {
  value: "\uD14C\uC774\uBE14 \uBDF0",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0 \uBDF0\uB294 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC774\uBBF8\uC9C0(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets\\images`), ` \uD3F4\uB354\uC5D0 \uC704\uCE58)\uB97C \uAD00\uB9AC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#tree-view"
  }), `\uD2B8\uB9AC \uBDF0`), `(\uC67C\uCABD)\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#table-view"
  }), `\uD14C\uC774\uBE14 \uBDF0`), `(\uC624\uB978\uCABD)\uB77C\uB294 \uB450 \uAC1C\uC758 \uC139\uC158\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0 \uAE30\uBCF8 \uAD6C\uC131 \uAC12\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view"
  }), `Config View`), `\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view#default-image-configuration"
  }), `Default Image Configuration`), `\uC5D0\uC11C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-view-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 \uC774\uBBF8\uC9C0 \uBDF0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "tree-view"
  }), `\uD2B8\uB9AC \uBDF0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD2B8\uB9AC \uBDF0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC874\uC7AC\uD558\uB294 \uC774\uBBF8\uC9C0\uC640 \uD3F4\uB354\uC758 \uAC1C\uC694\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uD2B8\uB9AC \uBDF0\uC758 \uB108\uBE44\uB294 \uD544\uC694\uC5D0 \uB530\uB77C \uADF8\uB9AC\uB4DC \uBD84\uD560\uC790\uB97C \uB4DC\uB798\uADF8\uD558\uC5EC \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-tree-view-4.17.png",
    mdxType: "Figure"
  }, "\uC774\uBBF8\uC9C0 \uBDF0\uC758 \uD2B8\uB9AC \uBDF0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0 \uBDF0\uC758 \uC0C1\uB2E8 \uC624\uB978\uCABD\uC5D0 \uC788\uB294 \u201C+\u201D \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uAC70\uB098, \uD639\uC740 \uD30C\uC77C \uD0D0\uC0C9\uAE30\uC5D0\uC11C \uBC14\uB85C \uC774\uBBF8\uC9C0\uB97C \uD2B8\uB9AC \uBDF0\uB85C \uB4DC\uB798\uADF8\uD558\uC5EC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets\\images`), ` \uD3F4\uB354\uC5D0 \uC774\uBBF8\uC9C0\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uBBF8\uC9C0\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets\\images`), ` \uD3F4\uB354\uC5D0 \uCD94\uAC00\uB418\uBA74 Image Manager\uC5D0 \uC790\uB3D9\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F4\uB354 \uB178\uB4DC\uB97C \uD074\uB9AD\uD558\uBA74 \uD574\uB2F9 \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB41C \uC774\uBBF8\uC9C0\uAC00 \uD14C\uC774\uBE14 \uBDF0\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4(\uB8E8\uD2B8 \uD3F4\uB354\uC778 \u201Cimages\u201D\uB97C \uD074\uB9AD\uD558\uBA74 \uD558\uC704 \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB41C \uC774\uBBF8\uC9C0\uB97C \uD3EC\uD568\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC800\uC7A5\uB41C \uC774\uBBF8\uC9C0\uAC00 \uBAA8\uB450 \uD45C\uC2DC\uB429\uB2C8\uB2E4).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0 \uB178\uB4DC\uB97C \uD074\uB9AD\uD558\uBA74 \uB3D9\uC77C\uD55C \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB41C \uB2E4\uB978 \uC774\uBBF8\uC9C0\uB3C4 \uD14C\uC774\uBE14 \uBDF0\uC5D0 \uD45C\uC2DC\uB418\uBBC0\uB85C \uC774\uBBF8\uC9C0\uB97C \uC120\uD0DD\uD55C \uD6C4 \uC624\uB978\uCABD \uC18D\uC131 \uBDF0\uC5D0\uC11C \uAD00\uB828 \uC18D\uC131\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F4\uB354 \uC606\uC758 V\uC790 \uAE30\uD638\uB97C \uD074\uB9AD\uD558\uBA74 \uD3F4\uB354\uB97C \uC811\uAC70\uB098 \uD3BC\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD2B8\uB9AC \uBDF0 \uC624\uB978\uCABD\uC758 V\uC790 \uAE30\uD638\uB97C \uD074\uB9AD\uD558\uBA74 \uD2B8\uB9AC \uBDF0\uB97C \uC811\uAC70\uB098 \uD3BC\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "table-view"
  }), `\uD14C\uC774\uBE14 \uBDF0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14C\uC774\uBE14 \uBDF0\uC5D0\uB294 \uD604\uC7AC \uC120\uD0DD\uB41C \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB41C \uC774\uBBF8\uC9C0\uC758 \uBAA9\uB85D\uC774 \uD45C\uC2DC\uB418\uBA70, \uC774\uBBF8\uC9C0\uC758 \uC5EC\uB7EC \uC18D\uC131\uC5D0 \uD574\uB2F9\uD558\uB294 \uC5F4\uB4E4\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC6D0\uD558\uB294 \uC774\uBBF8\uC9C0 \uD589\uC5D0\uC11C \uCCAB \uBC88\uC9F8 \uC5F4\uC5D0 \uC788\uB294 \uCCB4\uD06C\uB9C8\uD06C\uB97C \uC120\uD0DD\uD558\uBA74 \uD55C \uAC1C \uC774\uC0C1\uC758 \uC774\uBBF8\uC9C0\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uC18D\uC131\uC744 \uBCC0\uACBD\uD558\uBA74 \uC120\uD0DD\uB41C \uBAA8\uB4E0 \uC774\uBBF8\uC9C0\uC5D0 \uC801\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC01 \uC140\uC758 \uAC12\uC774 \uD68C\uC0C9\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC73C\uBA74 \uAE30\uBCF8\uAC12 \uC0AC\uC6A9\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 Image Format \uAE30\uBCF8\uAC12\uC744 ARGB8888\uB85C \uBCC0\uACBD\uD558\uB294 \uAC83\uCC98\uB7FC \uC774\uBBF8\uC9C0 \uAC12\uC744 \uBA85\uC2DC\uC801\uC73C\uB85C \uC124\uC815\uD558\uBA74 \uC140\uC774 \uC9C4\uD558\uAC8C \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uAE30\uBCF8\uAC12\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view"
  }), `Config View`), `\uC5D0\uC11C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-table-view-4.17.png",
    mdxType: "Figure"
  }, "\uC774\uBBF8\uC9C0\uC758 \uD14C\uC774\uBE14 \uBDF0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Image:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774\uBBF8\uC9C0 \uBBF8\uB9AC \uBCF4\uAE30\uC785\uB2C8\uB2E4. \uC774\uBBF8\uC9C0 \uBBF8\uB9AC \uBCF4\uAE30\uC5D0 \uB9C8\uC6B0\uC2A4 \uCEE4\uC11C\uB97C \uAC16\uB2E4 \uB300\uBA74 \uD655\uB300\uB41C \uD06C\uAE30\uB85C \uBBF8\uB9AC \uBCF4\uAE30\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uBBF8\uB9AC \uBCF4\uAE30\uB97C \uD074\uB9AD\uD558\uBA74 .png \uC774\uBBF8\uC9C0\uC640 \uC5F0\uACB0\uB41C \uAE30\uBCF8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158(\uC608: paint.net)\uC5D0\uC11C \uC774\uBBF8\uC9C0\uAC00 \uC5F4\uB9BD\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Name:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB41C \uC774\uBBF8\uC9C0\uC758 \uC774\uB984\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Uses:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774\uBBF8\uC9C0\uAC00 \uC0AC\uC6A9\uB41C \uD69F\uC218\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Size:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774\uBBF8\uC9C0\uC758 \uAC00\uB85C x \uC138\uB85C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Image Format:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774\uBBF8\uC9C0\uC758 \uD615\uC2DD\uC785\uB2C8\uB2E4. \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC635\uC158\uC740 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uD615\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Dither Algorithm:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC120\uD0DD\uD55C \uC774\uBBF8\uC9C0\uC5D0 \uC0AC\uC6A9\uD560 \uB514\uB354 \uC54C\uACE0\uB9AC\uC998\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `0 - No dither: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uC774\uBBF8\uC9C0\uC5D0 \uB514\uB354\uB9C1\uC774 \uC801\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774 \uAC12\uC740 \uC544\uBB34\uAC83\uB3C4 \uBCC0\uACBD\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uC131\uB2A5\uC744 \uAC00\uC7A5 \uB192\uC77C \uC218 \uC788\uB294 \uC124\uC815\uC785\uB2C8\uB2E4. \uC774 \uAC12\uC740 \uC544\uBB34\uAC83\uB3C4 \uBCC0\uACBD\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uC131\uB2A5\uC744 \uAC00\uC7A5 \uB192\uC77C \uC218 \uC788\uB294 \uC124\uC815\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1 - Floyd-Steinberg: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uC624\uCC28\uB97C \uC778\uC811 \uD53D\uC140\uAE4C\uC9C0 \uD655\uC0B0\uC2DC\uCF1C \uB514\uB354\uB9C1\uC774 \uC138\uBC00\uD574\uC9C0\uC9C0\uB9CC \uC120\uBA85\uB3C4\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `2 - Jarvis, Judice & Ninke: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Floyd-Steinberg\uC5D0 \uBE44\uD574 \uC624\uCC28\uB97C \uD55C \uB2E8\uACC4 \uB354 \uBA3C \uAC70\uB9AC\uC758 \uD53D\uC140\uAE4C\uC9C0 \uD655\uC0B0\uC2DC\uD0A4\uBBC0\uB85C \uB514\uB354\uB9C1\uC740 \uAC70\uCE60\uC5B4\uC9C0\uB9CC \uB354\uC6B1 \uC120\uBA85\uD55C \uC774\uBBF8\uC9C0\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C 3\uAC00\uC9C0 \uC624\uCC28 \uD655\uC0B0 \uB514\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998 \uC911\uC5D0\uC11C \uC18D\uB3C4\uAC00 \uAC00\uC7A5 \uB290\uB9BD\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `3 - Stucki: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uD3C9\uADE0 \uC624\uCC28\uB97C \uCD5C\uC18C\uD654\uD55C \uB514\uB354\uB9C1\uC5D0 \uAE30\uBC18\uC744 \uB450\uACE0 \uC788\uC9C0\uB9CC \uB354\uC6B1 \uBE60\uB974\uACE0 \uC120\uBA85\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Alpha Dither:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC54C\uD30C \uCC44\uB110\uC744 \uD1B5\uD55C \uB514\uB354 \uC54C\uACE0\uB9AC\uC998\uC758 \uC0AC\uC6A9 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Layout Rotation:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uB514\uB354\uAC00 \uC774\uBBF8\uC9C0\uC5D0 \uC0AC\uC6A9\uD558\uB294 \uC54C\uACE0\uB9AC\uC998\uC785\uB2C8\uB2E4. \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC635\uC158\uC740 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC120\uD0DD\uD55C \uC0C9 \uC2EC\uB3C4\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Section:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC774\uBBF8\uC9C0\uAC00 \uC800\uC7A5\uB418\uB294 \uBA54\uBAA8\uB9AC \uC704\uCE58\uC785\uB2C8\uB2E4. \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC139\uC158\uC740 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC0DD\uC131\uB41C TouchGFX Board Setup\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Extra Section:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` L8 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD560 \uACBD\uC6B0 \uC0C9\uC0C1\uD45C\uB97C \uB2E4\uB978 \uBA54\uBAA8\uB9AC \uC704\uCE58\uC5D0 \uC800\uC7A5\uD558\uB3C4\uB85D \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC139\uC158\uC740 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC0DD\uC131\uB41C TouchGFX Board Setup\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/images-view/designer-images-view-menu-4.17.png",
    mdxType: "Figure"
  }, "\uC774\uBBF8\uC9C0\uC758 \uD14C\uC774\uBE14 \uBDF0\uC5D0\uC11C \uCCAB \uBC88\uC9F8 \uC140\uC5D0 \uC788\uB294 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14C\uC774\uBE14 \uBDF0\uC758 \uC67C\uCABD\uC5D0\uC11C \uCCAB \uBC88\uC9F8 \uC140\uC5D0 \uC788\uB294 \uCCB4\uD06C\uB9C8\uD06C \uBC15\uC2A4\uB97C \uC120\uD0DD\uD558\uBA74 \uC5EC\uB7EC \uAC1C\uC758 \uC774\uBBF8\uC9C0\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC140\uC5D0\uB294 \uB2E4\uC74C\uC758 4\uAC00\uC9C0 \uC635\uC158\uC774 \uD3EC\uD568\uB41C \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Copy image id`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uCF54\uB4DC\uC5D0\uC11C \uCC38\uC870\uD560 \uC218 \uC788\uB294 \uC774\uBBF8\uC9C0 ID\uB97C \uBCF5\uC0AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Delete`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uAD00\uB828 \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB41C \uC774\uBBF8\uC9C0\uB97C \uC0AD\uC81C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Open`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` .png \uC774\uBBF8\uC9C0\uC640 \uAD00\uB828\uB41C \uAE30\uBCF8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uC5FD\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Open folder`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uD30C\uC77C \uD0D0\uC0C9\uAE30\uC5D0\uC11C \uC774\uBBF8\uC9C0\uAC00 \uC800\uC7A5\uB41C \uD3F4\uB354\uB97C \uC5FD\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uB294 \uC774\uBBF8\uC9C0\uC758 \uD574\uB2F9 \uB77C\uC778\uC744 \uB9C8\uC6B0\uC2A4 \uC624\uB978\uCABD \uBC84\uD2BC\uC73C\uB85C \uD074\uB9AD\uD574\uC11C \uC5F4 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);