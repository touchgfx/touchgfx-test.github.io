"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[614],{

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

/***/ 6498:
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
  title: "\u4E8C\u8FDB\u5236\u7FFB\u8BD1"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/using-binary-translations",
  "id": "development/ui-development/touchgfx-engine-features/using-binary-translations",
  "title": "\u4E8C\u8FDB\u5236\u7FFB\u8BD1",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-translations.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/using-binary-translations",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/using-binary-translations",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-binary-translations",
    "title": "\u4E8C\u8FDB\u5236\u7FFB\u8BD1"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5B57\u4F53\u7F13\u5B58",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/font-cache"
  },
  "next": {
    "title": "\u540E\u7AEF\u901A\u4FE1",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/backend-communication"
  }
};
const assets = {};

const toc = [{
  value: "\u7FFB\u8BD1",
  id: "translations",
  level: 3
}, {
  value: "\u914D\u7F6E\u6587\u672C\u8F6C\u6362\u5668",
  id: "configuring-the-text-converter",
  level: 3
}, {
  value: "\u5B89\u88C5\u4E8C\u8FDB\u5236\u7FFB\u8BD1",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u63CF\u8FF0\u5982\u4F55\u5728TouchGFX\u4E2D\u4F7F\u7528\u4E8C\u8FDB\u5236\u7FFB\u8BD1\u3002 \u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6587\u672C\u7FFB\u8BD1\u6587\u4EF6\u4F1A\u88AB\u7F16\u8BD1\u5230\u5E94\u7528\u4E2D\u3002 This principle is efficient and easy to use. Binary translations keep the text translation out of the application. \u4E8C\u8FDB\u5236\u7FFB\u8BD1\u5728\u5355\u72EC\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u751F\u6210\uFF0C\u8BE5\u6587\u4EF6\u53EF\u7F16\u7A0B\u5230\u95EA\u5B58\u4E2D\u6216\u5B58\u50A8\u5728SD\u5361\u7B49\u5B58\u50A8\u8BBE\u5907\u4E0A\u3002  \u5728\u5904\u7406\u5927\u91CF\u7FFB\u8BD1\u6587\u4EF6\u65F6\uFF0C\u4E3A\u5E94\u7528\u5F00\u53D1\u8005\u5E26\u6765\u4E86\u66F4\u5927\u7075\u6D3B\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "translations"
  }), `\u7FFB\u8BD1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4E2D\u7684Text\u7C7B\u5305\u542B\u6307\u9488\u9635\u5217\uFF0C\u6307\u9488\u6307\u5411\u5E94\u7528\u4E2D\u6BCF\u79CD\u8BED\u8A00\u7684\u7FFB\u8BD1\u8868\u3002 \u7FFB\u8BD1\u8868\u57FA\u672C\u4E0A\u662F\u8BED\u8A00\u4E2D\u4F7F\u7528\u7684\u6240\u6709\u5B57\u7B26\u4E32\u7684\u96C6\u5408\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",
    noShadow: "true",
    width: "420",
    mdxType: "Figure"
  }, "\u5C06\u6587\u672C\u6620\u5C04\u5230\u7279\u5B9A\u8BED\u8A00"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8868\u4F7FTouchGFX\u80FD\u591F\u627E\u5230\u4EE5\u9009\u4E2D\u8BED\u8A00\u4E66\u5199\u7684\u7ED9\u5B9A\u6587\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-translations/binary-translation.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u6620\u5C04\u5230\u4E8C\u8FDB\u5236\u7FFB\u8BD1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD0\u884C\u65F6\u95F4\u4F7F\u7528\u4E8C\u8FDB\u5236\u7FFB\u8BD1\u65F6\uFF0C\u53EF\u4EE5\u5C06\u6620\u5C04\u4ECE\u5185\u7F16\u8BD1\u7FFB\u8BD1\u66F4\u6539\u4E3A\u4E8C\u8FDB\u5236\u7FFB\u8BD1\u3002 \u5FC5\u987B\u5728\u53EF\u5BFB\u5740\u5B58\u50A8\u5668\uFF08\u95EA\u5B58\u6216RAM\uFF09\u4E2D\u63D0\u4F9B\u4E8C\u8FDB\u5236\u7FFB\u8BD1\u3002 \u4F8B\u5982\uFF0C\u53EF\u4EE5\u4ECE\u78C1\u76D8\u52A0\u8F7D\u6216\u5728\u751F\u4EA7\u8FC7\u7A0B\u4E2D\u5199\u5165\u95EA\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "configuring-the-text-converter"
  }), `\u914D\u7F6E\u6587\u672C\u8F6C\u6362\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u5C06TouchGFX\u6587\u672C\u8F6C\u6362\u5668\u914D\u7F6E\u4E3A\u751F\u6210\u4E8C\u8FDB\u5236\u7FFB\u8BD1\u3002 \u8FD9\u5728TouchGFX Designer 4.13\u4E2D\u5F88\u5BB9\u6613\u505A\u5230\u3002 \u8F6C\u81F3\u201C\u914D\u7F6E\u201D\u9009\u9879\u5361\uFF0C\u9009\u62E9\u201C\u6587\u672C\u914D\u7F6E\u201D\uFF0C\u7136\u540E\u70B9\u51FB\u201C\u4E8C\u8FDB\u5236\u7FFB\u8BD1\u6587\u4EF6\u201D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-translations/designer-text-config-4.17.png",
    noShadow: "true",
    width: "900",
    mdxType: "Figure"
  }, "\u542F\u7528\u4E8C\u8FDB\u5236\u7FFB\u8BD1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u4E00\u6B21\u751F\u6210\u4EE3\u7801\u65F6\uFF0C\u4E8C\u8FDB\u5236\u7FFB\u8BD1\u5C06\u4F1A\u51FA\u73B0\u5728generated/texts/binary\u6587\u4EF6\u5939\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u751F\u6210\u4E8C\u8FDB\u5236\u7FFB\u8BD1\u65F6\uFF0C\u7F16\u8BD1\u5230\u5E94\u7528\u4E2D\u7684\u7FFB\u8BD1\u6587\u4EF6\u4E3A\u7A7A\u3002 \u56E0\u6B64\uFF0C\u9664\u975E\u52A0\u8F7D\u4E8C\u8FDB\u5236\u7FFB\u8BD1\uFF0C\u5426\u5219\u4E0D\u663E\u793A\u6587\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-a-binary-translation"
  }), `\u5B89\u88C5\u4E8C\u8FDB\u5236\u7FFB\u8BD1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5B58\u50A8\u5668\u4E2D\u5DF2\u6709\u5E94\u7528\u7684\u4E8C\u8FDB\u5236\u7FFB\u8BD1\uFF0C\u5219\u53EF\u4EE5\u5728TouchGFX\u4E2D\u52A0\u8F7D\u5B83\u3002 \u73B0\u5728\uFF0CTouchGFX\u5C06\u4F7F\u7528\u8BE5\u7FFB\u8BD1\u6587\u4EF6\u3002 \u6839\u636E\u5E94\u7528\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u4F4D\u7F6E\u6216\u65F6\u95F4\u8FDB\u884C\uFF08\u53EF\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `gui/src/common/FrontApplication.cpp`), `\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)`), `\u6784\u9020\u51FD\u6570\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4ECE\u6587\u4EF6\u7CFB\u7EDF\u8BFB\u53D6\u82F1\u8BED\u7684\u7FFB\u8BD1\u6587\u4EF6\u5E76\u5C06\u5176\u5B89\u88C5\u4E3A\u8BED\u8A00\u201CGB\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF0C\u5728\u5B89\u88C5\u7FFB\u8BD1\u6587\u4EF6\u540E\uFF0C\u5FC5\u987B\u66F4\u6539\u8BED\u8A00\u3002 \u5426\u5219\uFF0CTouchGFX\u4ECD\u5C06\u4F7F\u7528\u4E4B\u524D\u7684\u7FFB\u8BD1\u6587\u4EF6\u3002 \u9605\u8BFB `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "texts-and-fonts#switching-language"
  }), `\u6B64\u5904`), `\u5173\u4E8E\u66F4\u6539\u8BED\u8A00\u7684\u66F4\u591A\u5185\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u5916\uFF0C\u8FD8\u5FC5\u987B\u5F3A\u5236\u91CD\u7ED8\u5F53\u524D\u5C4F\u5E55\u6216\u66F4\u6362\u5C4F\u5E55\uFF0C\u4EE5\u4FBF\u67E5\u770B\u6700\u65B0\u6587\u672C\uFF08\u5982\u679C\u5728\u4E3A\u663E\u793A\u5668\u4E0A\u4F7F\u7528\u7684\u8BED\u8A00\u52A0\u8F7D\u7FFB\u8BD1\u6587\u4EF6\uFF09\u3002 TouchGFX\u4E0D\u4F1A\u81EA\u52A8\u91CD\u7ED8\u4EFB\u4F55\u5185\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u901A\u8FC7\u8BA9\u6839\u5BB9\u5668\u65E0\u6548\u6765\u91CD\u7ED8\u5F53\u524D\u5C4F\u5E55\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `invalidate();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u5C06\u5F3A\u5236\u91CD\u7ED8\u3002 \u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6700\u597D\u66F4\u6362\u5C4F\u5E55\uFF0C\u4EE5\u4FBF\u4ECE\u5934\u8FDB\u884C\u8BBE\u7F6E\uFF08\u5982\u91CD\u65B0\u8BA1\u7B97TextArea\u5927\u5C0F\uFF09\u3002 \u901A\u8FC7\u5728TouchGFX Designer\u4E2D\u521B\u5EFA\u5177\u6709\u201C\u66F4\u6362\u5C4F\u5E55\u201D\u64CD\u4F5C\u7684\u4EA4\u4E92\uFF0C\u53EF\u4EE5\u66F4\u6362\u5C4F\u5E55\u3002 \u53C2\u89C1\u76F8\u5173`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/interactions-view"
  }), `\u6587\u7AE0`), `\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);