"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9641],{

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

/***/ 56239:
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
  title: "\uB7F0\uD0C0\uC784\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB85C\uB4DC"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/loading-images-at-runtime",
  "id": "development/ui-development/scenarios/loading-images-at-runtime",
  "title": "\uB7F0\uD0C0\uC784\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB85C\uB4DC",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/loading-images-at-runtime.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/loading-images-at-runtime",
  "permalink": "/4.20/ko/docs/development/ui-development/scenarios/loading-images-at-runtime",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "loading-images-at-runtime",
    "title": "\uB7F0\uD0C0\uC784\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB85C\uB4DC"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uCE90\uC2DC(Cacheable) \uCEE8\uD14C\uC774\uB108\uB97C \uD1B5\uD55C \uC131\uB2A5 \uAC1C\uC120",
    "permalink": "/4.20/ko/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"
  },
  "next": {
    "title": "L8 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uD1B5\uD55C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9 \uC808\uAC10",
    "permalink": "/4.20/ko/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"
  }
};
const assets = {};



const toc = [{
  value: "BMP \uD30C\uC77C \uB85C\uB529 \uC608",
  id: "loading-bmp-file-example",
  level: 2
}, {
  value: "BMP \uB85C\uB354",
  id: "the-bmp-loader",
  level: 3
}, {
  value: "\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC5D0 \uC801\uD569\uD55C \uBA54\uBAA8\uB9AC \uAD6C\uC131",
  id: "configure-memory-for-dynamic-bitmaps",
  level: 2
}, {
  value: "JPEG \uD30C\uC77C \uB85C\uB4DC",
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
  }, "\uBA3C\uC800 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/dynamic-bitmaps",
    mdxType: "Link"
  }, "\uB3D9\uC801 \uBE44\uD2B8\uB9F5"), "\uC5D0 \uB300\uD574 \uC77D\uC5B4\uBCF4\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uCEF4\uD30C\uC77C\uB418\uB294 \uAC83\uC740 \uD45C\uC900 \uBE44\uD2B8\uB9F5\uC774\uAE30 \uB54C\uBB38\uC5D0 \uCEF4\uD30C\uC77C\uD560 \uB54C\uB294 \uD45C\uC900 \uBE44\uD2B8\uB9F5\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uAE30\uB2A5\uC744 \uC774\uC6A9\uD558\uBA74 \uB7F0\uD0C0\uC784 \uC2DC \uD30C\uC77C\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uC77D\uC5B4\uC62C \uC218 \uC788\uC73C\uBA70, \uC778\uD130\uB137 \uC5F0\uACB0\uC744 \uD1B5\uD574 \uC774\uBBF8\uC9C0\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "loading-bmp-file-example"
  }), `BMP \uD30C\uC77C \uB85C\uB529 \uC608`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC11C\uB294 BMP \uB85C\uB354\uB97C \uC0AC\uC6A9\uD574 Windows BMP \uD30C\uC77C\uC5D0\uC11C \uD53D\uC140\uC744 \uB85C\uB4DC\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uB85C\uB354 \uCF54\uB4DC\uC5D0 \uB300\uD55C \uC124\uBA85\uC740 \uAE00 \uD6C4\uBC18\uBD80\uC5D0 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 \uBDF0\uC5D0 \uC774\uBBF8\uC9C0 \uC704\uC82F\uC744 \uC0BD\uC785\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC774 \uC704\uC82F\uC5D0\uC11C BMP\uAC00 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class TemplateView : public View
{
private:
    Image image;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `setupScreen\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uB97C \uB85C\uB4DC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }), `BMP \uB85C\uB354`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uB2E8\uC21C\uD55C BMP \uD30C\uC77C \uB85C\uB354\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uCF54\uB4DC\uB85C, 24bpp BMP \uD30C\uC77C\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4.  \uB530\uB77C\uC11C \uC0AC\uC6A9 \uC911\uC778 \uC2DC\uC2A4\uD15C\uC5D0 \uB9DE\uAC8C \uD30C\uC77C \uC2DC\uC2A4\uD15C \uD638\uCD9C\uC744 \uC870\uC815\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uCF54\uB4DC\uB294 \uC124\uBA85\uC744 \uC704\uD55C \uC608\uC2DC\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C RGB888\uC5D0 \uB354\uC6B1 \uCD5C\uC801\uD654\uB41C \uB9AC\uB354\uB77C\uBA74 \uD30C\uC77C\uC5D0\uC11C \uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uBA54\uBAA8\uB9AC\uB85C \uC9C1\uC811 \uC77D\uC5B4\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uB2E8, \uC774 \uACBD\uC6B0 row padding\uC744 \uAC74\uB108\uB6F0\uC5B4\uC57C \uD569\uB2C8\uB2E4). \uC704\uC758 \uB9AC\uB354\uB294 BMP \uD30C\uC77C\uC5D0\uC11C \uC784\uC2DC \uBC84\uD37C\uB85C 10\uAC1C\uC758 \uD53D\uC140\uC744 \uC77D\uC5B4\uC635\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uD53D\uC140\uC774 \uC62C\uBC14\uB978 \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\uB418\uBA74\uC11C \uBE44\uD2B8\uB9F5\uC73C\uB85C \uBCF5\uC0AC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "configure-memory-for-dynamic-bitmaps"
  }), `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC5D0 \uC801\uD569\uD55C \uBA54\uBAA8\uB9AC \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD558\uC5EC \uC0AC\uC6A9\uD558\uB824\uBA74 \uBA3C\uC800 TouchGFX\uB97C \uAD6C\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uC804\uC81C \uC870\uAC74\uC73C\uB85C, \uBC84\uD37C 1\uAC1C\uC640 \uCD5C\uB300\uD55C \uB9CE\uC740 \uB3D9\uC801 \uBE44\uD2B8\uB9F5(\uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uB3C4 \uC0AC\uC6A9\uD574\uC57C \uD568)\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 STM32F7xx \uC608\uC81C\uC785\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uC678\uBD80 RAM\uC5D0\uC11C \uBC84\uD37C\uB97C \uD560\uB2F9\uD569\uB2C8\uB2E4. \uB610\uD55C 320x240 \uD06C\uAE30\uC758 24\uBE44\uD2B8 \uBE44\uD2B8\uB9F5\uC744 \uB85C\uB4DC\uD558\uC5EC \uD45C\uC2DC\uD560 \uAC83\uC774\uAE30 \uB54C\uBB38\uC5D0 \uD544\uC694\uD55C \uBA54\uBAA8\uB9AC \uC694\uAC74\uC740 320x240x3 = 230400\uC785\uB2C8\uB2E4. \uADF8 \uBC16\uC5D0\uB3C4 \uAE30\uB85D\uC744 \uC704\uD574 \uC57D\uAC04\uC758 \uACF5\uAC04\uC774 \uD544\uC694\uD558\uBBC0\uB85C \uBC84\uD37C\uC5D0 232000\uBC14\uC774\uD2B8\uB97C \uD560\uB2F9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uC9C0\uB9C9\uC73C\uB85C, \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uCD5C\uB300\uD55C \uB9CE\uC774 \uC785\uB825\uD574\uC57C \uD558\uBBC0\uB85C \uC694\uAC74\uC5D0 \uB530\uB77C \uC870\uC815\uD569\uB2C8\uB2E4. \uB2E8, \uD504\uB808\uC784\uBC84\uD37C\uB294 \uB300\uBD80\uBD84\uC758 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC678\uBD80 RAM\uC5D0\uB3C4 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB97C \uC911\uBCF5\uB418\uB294 \uBA54\uBAA8\uB9AC \uC601\uC5ED\uC5D0 \uC800\uC7A5\uD558\uC9C0 \uC54A\uB3C4\uB85D \uC8FC\uC758\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uBA54\uBAA8\uB9AC\uAC00 \uBD80\uC871\uD55C \uACBD\uC6B0 dynamicBitmapCreate\uC5D0\uC11C \uBC18\uD658\uB418\uB294 BitmapId\uB294 BITMAP_INVALID\uB85C \uCC98\uB9AC\uB429\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "loading-jpeg-files"
  }), `JPEG \uD30C\uC77C \uB85C\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LibJPEG\uC5D0\uC11C JPEG \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD558\uB294 JPEG \uD30C\uC77C \uB85C\uB354 \uC608\uC81C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(8727)/* ["default"] */ .Z)
  }, "\uC5EC\uAE30\uC5D0\uC11C \uCC3E\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4"), `. \uC774 \uB85C\uB354\uB294 \uC704\uC758 BMPFileLoader\uC640 \uC720\uC0AC\uD55C JPEGLoader \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 8727:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/jpeg-file-loader-4ee676d38cdfca7ef2583412712b6bf1.zip");

/***/ })

}]);