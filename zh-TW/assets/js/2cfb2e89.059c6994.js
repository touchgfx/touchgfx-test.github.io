"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3515],{

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

/***/ 45568:
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
  id: "using-binary-translations",
  title: "\u4E8C\u9032\u4F4D\u7FFB\u8B6F"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/using-binary-translations",
  "id": "development/ui-development/touchgfx-engine-features/using-binary-translations",
  "title": "\u4E8C\u9032\u4F4D\u7FFB\u8B6F",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-translations.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/using-binary-translations",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-translations",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-binary-translations",
    "title": "\u4E8C\u9032\u4F4D\u7FFB\u8B6F"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5B57\u9AD4\u5FEB\u53D6",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/font-cache"
  },
  "next": {
    "title": "\u5F8C\u7AEF\u901A\u4FE1",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/backend-communication"
  }
};
const assets = {};

const toc = [{
  value: "\u7FFB\u8B6F",
  id: "translations",
  level: 3
}, {
  value: "\u914D\u7F6E\u6587\u5B57\u8F49\u63DB\u5668",
  id: "configuring-the-text-converter",
  level: 3
}, {
  value: "\u5B89\u88DD\u4E8C\u9032\u4F4D\u7FFB\u8B6F",
  id: "installing-a-binary-translation",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u63CF\u8FF0\u5982\u4F55\u5728TouchGFX\u4E2D\u4F7F\u7528\u4E8C\u9032\u4F4D\u7FFB\u8B6F\u3002 \u6B63\u5E38\u60C5\u6CC1\u4E0B\uFF0C\u6587\u5B57\u7FFB\u8B6F\u6A94\u6703\u88AB\u7DE8\u8B6F\u5230\u61C9\u7528\u4E2D\u3002 This principle is efficient and easy to use. Binary translations keep the text translation out of the application. \u4E8C\u9032\u4F4D\u7FFB\u8B6F\u5728\u55AE\u7368\u7684\u4E8C\u9032\u4F4D\u6A94\u6848\u4E2D\u751F\u6210\uFF0C\u8A72\u6A94\u53EF\u71D2\u9304\u5230\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u6216\u5B58\u5132\u5728SD\u5361\u7B49\u5B58\u653E\u88DD\u7F6E\u4E0A\u3002  \u5728\u8655\u7406\u5927\u91CF\u7FFB\u8B6F\u6A94\u6642\uFF0C\u70BA\u61C9\u7528\u958B\u767C\u8005\u5E36\u4F86\u4E86\u66F4\u5927\u9748\u6D3B\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "translations"
  }), `\u7FFB\u8B6F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4E2D\u7684Text\u985E\u5305\u542B\u6307\u6A19\u9663\u5217\uFF0C\u6307\u6A19\u6307\u5411\u61C9\u7528\u4E2D\u6BCF\u7A2E\u8A9E\u8A00\u7684\u7FFB\u8B6F\u8868\u3002 \u7FFB\u8B6F\u8868\u57FA\u672C\u4E0A\u662F\u8A9E\u8A00\u4E2D\u4F7F\u7528\u7684\u6240\u6709\u5B57\u4E32\u7684\u96C6\u5408\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",
    noShadow: "true",
    width: "420",
    mdxType: "Figure"
  }, "\u5C07\u6587\u5B57\u6620\u5C04\u5230\u7279\u5B9A\u8A9E\u8A00"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8868\u4F7FTouchGFX\u80FD\u5920\u627E\u5230\u4EE5\u9078\u4E2D\u8A9E\u8A00\u66F8\u5BEB\u7684\u7D66\u5B9A\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-translations/binary-translation.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u6620\u5C04\u5230\u4E8C\u9032\u4F4D\u7FFB\u8B6F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u57F7\u884C\u6642\u9593\u4F7F\u7528\u4E8C\u9032\u4F4D\u7FFB\u8B6F\u6642\uFF0C\u53EF\u4EE5\u5C07\u6620\u5C04\u5F9E\u5167\u7DE8\u8B6F\u7FFB\u8B6F\u66F4\u6539\u70BA\u4E8C\u9032\u4F4D\u7FFB\u8B6F\u3002 \u5FC5\u9808\u5728\u53EF\u5B9A\u5740\u8A18\u61B6\u9AD4\uFF08\u5FEB\u9583\u8A18\u61B6\u9AD4\u6216RAM\uFF09\u4E2D\u63D0\u4F9B\u4E8C\u9032\u4F4D\u7FFB\u8B6F\u3002 \u4F8B\u5982\uFF0C\u53EF\u4EE5\u5F9E\u786C\u789F\u8F09\u5165\u6216\u5728\u751F\u7522\u904E\u7A0B\u4E2D\u5BEB\u5165\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "configuring-the-text-converter"
  }), `\u914D\u7F6E\u6587\u5B57\u8F49\u63DB\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u5C07TouchGFX\u6587\u5B57\u8F49\u63DB\u5668\u914D\u7F6E\u70BA\u751F\u6210\u4E8C\u9032\u4F4D\u7FFB\u8B6F\u3002 \u9019\u5728TouchGFX Designer 4.13\u4E2D\u5F88\u5BB9\u6613\u505A\u5230\u3002 \u8F49\u81F3\u201CConfig\u201D\u9078\u9805\u5361\uFF0C\u9078\u64C7\u201CText Configuration\u201D\uFF0C\u7136\u5F8C\u9EDE\u64CA\u201CBinary translation files\u201D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-translations/designer-text-config-4.17.png",
    noShadow: "true",
    width: "900",
    mdxType: "Figure"
  }, "\u555F\u7528\u4E8C\u9032\u4F4D\u7FFB\u8B6F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u4E00\u6B21\u751F\u6210\u7A0B\u5F0F\u78BC\u6642\uFF0C\u4E8C\u9032\u4F4D\u7FFB\u8B6F\u5C07\u6703\u51FA\u73FE\u5728generated/texts/binary\u8CC7\u6599\u593E\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u751F\u6210\u4E8C\u9032\u4F4D\u7FFB\u8B6F\u6642\uFF0C\u7DE8\u8B6F\u5230\u61C9\u7528\u4E2D\u7684\u7FFB\u8B6F\u6587\u4EF6\u70BA\u7A7A\u3002 \u56E0\u6B64\uFF0C\u9664\u975E\u8F09\u5165\u4E8C\u9032\u4F4D\u7FFB\u8B6F\uFF0C\u5426\u5247\u4E0D\u986F\u793A\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-a-binary-translation"
  }), `\u5B89\u88DD\u4E8C\u9032\u4F4D\u7FFB\u8B6F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u8A18\u61B6\u9AD4\u4E2D\u5DF2\u6709\u61C9\u7528\u7684\u4E8C\u9032\u4F4D\u7FFB\u8B6F\uFF0C\u5247\u53EF\u4EE5\u5728TouchGFX\u4E2D\u5B89\u88DD\u5B83\u3002 \u73FE\u5728\uFF0CTouchGFX\u5C07\u4F7F\u7528\u8A72\u7FFB\u8B6F\u6A94\u3002 \u6839\u64DA\u61C9\u7528\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u4F4D\u7F6E\u6216\u6642\u9593\u9032\u884C\uFF08\u53EF\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `gui/src/common/FrontApplication.cpp`), `\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)`), `\u69CB\u9020\u51FD\u6578\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u9762\u7684\u7BC4\u4F8B\u4E2D\uFF0C\u6211\u5011\u5F9E\u6A94\u6848\u7CFB\u7D71\u8B80\u53D6\u82F1\u8A9E\u7684\u7FFB\u8B6F\u6A94\u4E26\u5C07\u5176\u5B89\u88DD\u70BA\u8A9E\u8A00\u201CGB\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-11,15-15,19-19}",
    "{11-11,15-15,19-19}": true
  }), `//read the translation into this global array
uint8_t translation[10000];
...

//read the translation from a file, or change array to a pointer that points
//to the translation data in internal or addressable external flash
FILE* file = fopen("generated/texts/binary/LanguageGb.bin", "rb");
if (file)
{
    //read data from file
    fread(translation, 1, 10000, file);
    fclose(file);

    //replace empty translation with the binary data
    Texts::setTranslation(GB, translation);

    //always change language to get TouchGFX changed from the
    //empty translation compiled in to the binary translation
    Texts::setLanguage(GB);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF0C\u5728\u5B89\u88DD\u7FFB\u8B6F\u6A94\u5F8C\uFF0C\u5FC5\u9808\u66F4\u6539\u8A9E\u8A00\u3002 \u5426\u5247\uFF0CTouchGFX\u4ECD\u5C07\u4F7F\u7528\u4E4B\u524D\u7684\u7FFB\u8B6F\u6A94\u3002 \u95B1\u8B80 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "texts-and-fonts#switching-language"
  }), `\u6B64\u8655`), `\u95DC\u65BC\u66F4\u6539\u8A9E\u8A00\u7684\u66F4\u591A\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u5916\uFF0C\u9084\u5FC5\u9808\u5F37\u5236\u91CD\u7E6A\u7576\u524D\u87A2\u5E55\u6216\u66F4\u63DB\u87A2\u5E55\uFF0C\u4EE5\u4FBF\u67E5\u770B\u6700\u65B0\u6587\u5B57\uFF08\u5982\u679C\u5728\u70BA\u986F\u793A\u5668\u4E0A\u4F7F\u7528\u7684\u8A9E\u8A00\u8F09\u5165\u7FFB\u8B6F\u6A94\uFF09\u3002 TouchGFX\u4E0D\u6703\u81EA\u52D5\u91CD\u7E6A\u4EFB\u4F55\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u901A\u904E\u8B93\u6839\u5BB9\u5668\u7121\u6548\u4F86\u91CD\u7E6A\u7576\u524D\u87A2\u5E55\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `invalidate();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u5C07\u5F37\u5236\u91CD\u7E6A\u3002 \u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u6700\u597D\u66F4\u63DB\u87A2\u5E55\uFF0C\u4EE5\u4FBF\u5F9E\u982D\u9032\u884C\u8A2D\u7F6E\uFF08\u5982\u91CD\u65B0\u8A08\u7B97TextArea\u5927\u5C0F\uFF09\u3002 \u901A\u904E\u5728TouchGFX Designer\u4E2D\u5275\u5EFA\u5177\u6709\u201CChange Screen\u201D\u64CD\u4F5C\u7684\u4EA4\u4E92\uFF0C\u53EF\u4EE5\u66F4\u63DB\u87A2\u5E55\u3002 \u53C3\u52A0\u76F8\u95DC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/interactions-view"
  }), `\u6587\u7AE0`), `\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);