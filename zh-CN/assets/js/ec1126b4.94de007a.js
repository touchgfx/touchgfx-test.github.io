"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8908],{

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

/***/ 94279:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
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
  id: "loading-images-at-runtime",
  title: "\u52A8\u6001\u52A0\u8F7D\u56FE\u50CF"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/loading-images-at-runtime",
  "id": "development/ui-development/scenarios/loading-images-at-runtime",
  "title": "\u52A8\u6001\u52A0\u8F7D\u56FE\u50CF",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/loading-images-at-runtime.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/loading-images-at-runtime",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/scenarios/loading-images-at-runtime",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "loading-images-at-runtime",
    "title": "\u52A8\u6001\u52A0\u8F7D\u56FE\u50CF"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u7528\u53EF\u7F13\u5B58\u5BB9\u5668\u5B9E\u73B0\u66F4\u4F18\u6027\u80FD",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"
  },
  "next": {
    "title": "\u4F7F\u7528L8\u56FE\u50CF\u683C\u5F0F\u51CF\u5C11\u5B58\u50A8\u7A7A\u95F4\u6D88\u8017",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"
  }
};
const assets = {};



const toc = [{
  value: "\u52A0\u8F7DBMP\u6587\u4EF6\u793A\u4F8B",
  id: "loading-bmp-file-example",
  level: 2
}, {
  value: "BMP\u52A0\u8F7D\u5668",
  id: "the-bmp-loader",
  level: 3
}, {
  value: "\u4E3A\u52A8\u6001\u4F4D\u56FE\u914D\u7F6E\u5185\u5B58",
  id: "configure-memory-for-dynamic-bitmaps",
  level: 2
}, {
  value: "\u6B63\u5728\u52A0\u8F7DJPEG\u6587\u4EF6",
  id: "loading-jpeg-files",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this section we will discuss a method for loading images from a file in your TouchGFX application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The standard procedure for using bitmaps in TouchGFX application is to include the bitmaps in the application. The PNG files are converted to binary data in .cpp files and compiled, and linked into the application. This is an easy way of making the bitmaps available for the application at runtime.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In some application this is not possible or practical. For example when the images are not available at compile-time (maybe they are downloaded through an internet connection later), or when you simply have too many bitmaps to fit in your application flash space.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Dynamic bitmaps (see link below) is a RAM-based solution to this problem. The Dynamic bitmaps are created at runtime, and the application can freely decide the number of bitmaps, the format, and the width and height.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `As the dynamic bitmaps are stored in RAM (inside the bitmap cache), the application must copy pixels values from a source into the dynamic bitmap after creating the dynamic bitmaps. After creation, the dynamic bitmap contains uninitialized pixels.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This section describes how dynamic bitmaps can be used to create applications where some of the graphic content is read from BMP files. A simple use-case is an application that shows BMP files from an SD-card.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u8BF7\u5148\u9605\u8BFB", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/dynamic-bitmaps",
    mdxType: "Link"
  }, "\u52A8\u6001\u4F4D\u56FE"), "\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF0C\u6807\u51C6\u4F4D\u56FE\u4F1A\u88AB\u7F16\u8BD1\u5230\u5E94\u7528\u4E2D\uFF0C\u56E0\u6B64\u5FC5\u987B\u5728\u7F16\u8BD1\u65F6\u63D0\u4F9B\u3002 \u52A8\u6001\u4F4D\u56FE\u7279\u6027\u5141\u8BB8\u5728\u8FD0\u884C\u65F6\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u56FE\u50CF\uFF0C\u751A\u81F3\u53EF\u4EE5\u901A\u8FC7\u4E92\u8054\u7F51\u8FDE\u63A5\u4E0B\u8F7D\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "loading-bmp-file-example"
  }), `\u52A0\u8F7DBMP\u6587\u4EF6\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528BMP\u52A0\u8F7D\u5668\u4ECEWindows BMP\u6587\u4EF6\u52A0\u8F7D\u50CF\u7D20\u6570\u636E\u3002 \u6587\u7AE0\u540E\u9762\u5C06\u63D0\u4F9B\u52A0\u8F7D\u5668\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\u5728\u89C6\u56FE\u4E2D\u63D2\u5165\u56FE\u50CF\u63A7\u4EF6\u3002 \u6B64\u63A7\u4EF6\u7528\u4E8E\u663E\u793ABMP\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class TemplateView : public View
{
private:
    Image image;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728 setupScreen\u4E2D\u52A0\u8F7D\u56FE\u50CF\u6570\u636E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{7-8,13-14}",
    "{7-8,13-14}": true
  }), `void TemplateView::setupScreen()
{
    FILE* f = fopen("image.jpg", "rb");
    uint16_t width, height;

    //Get the image dimensions from the BMP file
    BMPFileLoader::getBMP24Dimensions(f, width, height);
    BitmapId bmpId;

    //Create (16bit) dynamic bitmap of same dimension
    bmpId = Bitmap::dynamicBitmapCreate(width, height, Bitmap::RGB565);

    //Load pixels from BMP file to dynamic bitmap
    BMPFileLoader::readBMP24File(Bitmap(bmpId), f);

    //Make Image show the loaded bitmap
    image.setBitmap(Bitmap(bmpId));

    //Position image and add to View
    image.setXY(20, 20);
    add(image);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "the-bmp-loader"
  }), `BMP\u52A0\u8F7D\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684BMP\u6587\u4EF6\u52A0\u8F7D\u5668\u7684\u4EE3\u7801\u3002 \u5B83\u4EC5\u652F\u630124bpp BMP\u6587\u4EF6\u3002  \u60A8\u53EF\u80FD\u9700\u8981\u8C03\u6574\u6587\u4EF6\u7CFB\u7EDF\u8C03\u7528\u90E8\u5206\uFF0C\u4EE5\u9002\u5E94\u60A8\u7684\u7CFB\u7EDF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "BMPFileLoader.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/hal/Types.hpp>
#include <touchgfx/Bitmap.hpp>

using namespace touchgfx;

class BMPFileLoader
{
public:
    typedef void* FileHdl;

    static void getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height);
    static void readBMP24File(Bitmap bitmap, FileHdl fileHandle);
private:
    static int readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length);
    static void seekFile(FileHdl hdl, uint32_t offset);
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "BMPFileLoader.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/BMPFileLoader.hpp>
#include <platform/driver/lcd/LCD16bpp.hpp>
#include <touchgfx/Color.hpp>

int BMPFileLoader::readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length)
{
    uint32_t r = fread(buffer, 1, length, (FILE*)hdl);
    if (r != length)
    {
        return 1;
    }
    return 0;
}

void BMPFileLoader::seekFile(FileHdl hdl, uint32_t offset)
{
    fseek((FILE*)hdl, offset, SEEK_SET);
}

void BMPFileLoader::getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height)
{
    uint8_t data[50];
    seekFile(fileHandle, 0);
    readFile(fileHandle, data, 26); //read first part of header.

    width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);
    height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);
}

void BMPFileLoader::readBMP24File(Bitmap bitmap, FileHdl fileHandle)
{
    uint8_t data[50];
    seekFile(fileHandle, 0);
    readFile(fileHandle, data, 26); //read first part of header.

    const uint32_t offset = data[10] | (data[11] << 8) | (data[12] << 16) | (data[12] << 24);
    const uint32_t width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);
    const uint32_t height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);

    readFile(fileHandle, data, offset - 26); //read rest of header.

    //get dynamic bitmap boundaries
    const uint32_t buffer_width = bitmap.getWidth();
    const uint32_t buffer_height = bitmap.getHeight();

    const uint32_t rowpadding = (4 - ((width * 3) % 4)) % 4;

    const Bitmap::BitmapFormat format = bitmap.getFormat();
    uint8_t* const  buffer8  = Bitmap::dynamicBitmapGetAddress(bitmap.getId());
    uint16_t* const buffer16 = (uint16_t*)buffer8;

    for (uint32_t y = 0; y < height; y++)
    {
        for (uint32_t x = 0; x < width; x++)
        {
            if (x % 10 == 0) //read data every 10 pixels = 30 bytes
            {
                if (x + 10 <= width) //read 10
                {
                    readFile(fileHandle, data, 10 * 3); //10 pixels
                }
                else
                {
                    readFile(fileHandle, data, (width - x) * 3 + rowpadding); //rest of line
                }
            }
            //insert pixel, if within dynamic bitmap boundaries
            if (x < buffer_width && ((height - y - 1) < buffer_height))
            {
                switch (format)
                {
                case Bitmap::RGB565:
                    buffer16[x + (height - y - 1) * buffer_width] =
                        LCD16bpp::getNativeColorFromRGB(data[(x % 10) * 3 + 2], data[(x % 10) * 3 + 1], data[(x % 10) * 3]);
                    break;
                case Bitmap::RGB888:
                    {
                        //24 bit framebuffer
                        const uint32_t inx = 3 * (x + (height - y - 1) * buffer_width);
                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];
                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];
                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];
                        break;
                    }
                case Bitmap::ARGB8888:
                    {
                        //24 bit framebuffer
                        const uint32_t inx = 4 * (x + (height - y - 1) * buffer_width);
                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];
                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];
                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];
                        buffer8[inx + 3] = 255; //solid
                        break;
                    }
                default:
                    assert(!"Unsupported bitmap format in BMPFileLoader!");
                }
            }
        }
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u4EE3\u7801\u7528\u4E8E\u529F\u80FD\u8BF4\u660E\u3002 \u6709\u4E00\u4E2A\u66F4\u4F18\u7684RGB888\u8BFB\u53D6\u5668\u53EF\u4EE5\u4ECE\u6587\u4EF6\u76F4\u63A5\u8BFB\u53D6\u6570\u636E\u5230\u52A8\u6001\u4F4D\u56FE\u5B58\u50A8\u5185\u5B58\u4E2D\uFF08\u6CE8\u610F\u8DF3\u8FC7\u884C\u586B\u5145\u5B57\u7B26\uFF09\u3002 \u4E0A\u9762\u7684\u8BFB\u53D6\u5668\u4ECEBMP\u6587\u4EF6\u4E2D\u5C0610\u4E2A\u50CF\u7D20\u7684\u6570\u636E\u8BFB\u5230\u4E86\u4E34\u65F6\u7F13\u51B2\u533A\u3002 \u7136\u540E\u8F6C\u6362\u6210\u6B63\u786E\u683C\u5F0F\uFF0C\u518D\u590D\u5236\u5230\u4F4D\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "configure-memory-for-dynamic-bitmaps"
  }), `\u4E3A\u52A8\u6001\u4F4D\u56FE\u914D\u7F6E\u5185\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u5FC5\u987B\u5148\u914D\u7F6ETouchGFX\uFF0C\u7136\u540E\u624D\u80FD\u521B\u5EFA\u548C\u4F7F\u7528\u52A8\u6001\u4F4D\u56FE\u3002 \u5FC5\u987B\u5148\u63D0\u4F9B\u4E00\u4E2A\u7F13\u51B2\u533A\u548C\u6700\u5927\u52A8\u6001\u4F4D\u56FE\u6570\u91CF\uFF08\u4E5F\u9002\u7528\u4E8E\u4EFF\u771F\u5668\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u4E00\u4E2ASTM32F7xx\u7684\u793A\u4F8B\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5728\u5916\u90E8RAM\u4E2D\u5206\u914D\u4E86\u7F13\u51B2\u533A\uFF1A\u6211\u4EEC\u60F3\u8981\u52A0\u8F7D\u5E76\u663E\u793A\u5C3A\u5BF8\u4E3A320x240\u768424\u4F4D\u4F4D\u56FE\u3002 \u56E0\u6B64\uFF0C\u9700\u8981\u7684\u5B58\u50A8\u7A7A\u95F4\u4E3A320x240x3 = 230400\u3002 \u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u70B9\u7A7A\u95F4\u7528\u4E8E\u5176\u5B83\u5F00\u9500\uFF0C\u56E0\u6B64\u4E3A\u7F13\u51B2\u533A\u5206\u914D\u4E86232000\u5B57\u8282\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2,8-8}",
    "{2-2,8-8}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    static uint32_t bmpCache = (uint32_t)(0xC00C0000); // SDRAM
    Bitmap::setCache((uint16_t*)bmpCache, 232000, 1);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u540E\u7684\u53C2\u6570\u662F\u52A8\u6001\u4F4D\u56FE\u7684\u6700\u5927\u6570\u91CF\uFF0C\u53EF\u6839\u636E\u60A8\u7684\u9700\u6C42\u8FDB\u884C\u8C03\u6574\u3002 \u6CE8\u610F\uFF0C\u5728\u8BB8\u591A\u5E73\u53F0\u4E0A\uFF0C\u5E27\u7F13\u51B2\u4E5F\u4FDD\u5B58\u5728\u5916\u90E8RAM\u4E2D\u3002 \u786E\u4FDD\u6CA1\u6709\u5C06\u4F4D\u56FE\u7F13\u5B58\u653E\u5728\u91CD\u53E0\u5B58\u50A8\u533A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u6CE8\u610F\uFF0C\u5982\u679C\u5B58\u50A8\u7A7A\u95F4\u4E0D\u591F\uFF0CdynamicBitmapCreate\u8FD4\u56DE\u7684BitmapId\u5C06\u662FBITMAP_INVALID\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "loading-jpeg-files"
  }), `\u6B63\u5728\u52A0\u8F7DJPEG\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(8727)/* ["default"] */ .Z)
  }, "\u8FD9\u91CC\u53EF\u4EE5\u627E\u5230"), `\u4E00\u4E2AJPEG\u6587\u4EF6\u52A0\u8F7D\u5668\u793A\u4F8B\uFF0C\u5B83\u5C55\u793A\u4E86\u5982\u4F55\u901A\u8FC7LibJPEG\u4F7F\u7528JPEG\u6587\u4EF6\u3002 \u5B83\u4F7F\u7528\u4E86\u4E00\u4E2A\u4E0E\u4E0A\u9762\u7684BMPFileLoader\u76F8\u4F3C\u7684JPEGLoader\u7C7B\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 8727:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/jpeg-file-loader-4ee676d38cdfca7ef2583412712b6bf1.zip");

/***/ })

}]);