"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1800],{

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

/***/ 47953:
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
  id: "fonts-in-unmapped-flash",
  title: "\uAE00\uAF34 \uB370\uC774\uD130\uC5D0 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC \uC0AC\uC6A9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/fonts-in-unmapped-flash",
  "id": "development/scenarios/fonts-in-unmapped-flash",
  "title": "\uAE00\uAF34 \uB370\uC774\uD130\uC5D0 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC \uC0AC\uC6A9",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/fonts-in-unmapped-flash.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/fonts-in-unmapped-flash",
  "permalink": "/4.20/ko/docs/development/scenarios/fonts-in-unmapped-flash",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "fonts-in-unmapped-flash",
    "title": "\uAE00\uAF34 \uB370\uC774\uD130\uC5D0 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC \uC0AC\uC6A9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC774\uBBF8\uC9C0\uC640 \uAE00\uAF34\uC5D0\uC11C \uC9C1\uB82C \uD50C\uB798\uC2DC \uC0AC\uC6A9",
    "permalink": "/4.20/ko/docs/development/scenarios/using-serial-flash"
  },
  "next": {
    "title": "\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD53D\uC140 \uD615\uC2DD \uBCC0\uACBD",
    "permalink": "/4.20/ko/docs/development/scenarios/scenarios-change-pixelformat-bpp"
  }
};
const assets = {};


const toc = [{
  value: "\uAE00\uAF34 \uB808\uC774\uC544\uC6C3",
  id: "font-layouts",
  level: 2
}, {
  value: "\uB9E4\uD551 \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD",
  id: "mapped-storage-format",
  level: 3
}, {
  value: "\uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD",
  id: "unmapped-storage-format",
  level: 3
}, {
  value: "\uAE00\uAF34 \uB370\uC774\uD130 \uB9AC\uB354",
  id: "font-data-reader",
  level: 4
}, {
  value: "\uC694\uC57D",
  id: "summary",
  level: 3
}, {
  value: "\uC608\uC81C",
  id: "example",
  level: 2
}, {
  value: "\uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8 \uC218\uC815",
  id: "linker-script-modifications",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uAE00\uAF34 \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC70\uC758 \uBAA8\uB4E0 \uAE00\uAF34 \uB370\uC774\uD130\uB97C \uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uB123\uB294 \uBC29\uBC95\uC744 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC218\uB9CE\uC740 \uBB38\uC790\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC800\uC7A5\uD558\uAE30 \uB54C\uBB38\uC5D0 \uAE00\uAF34 \uB370\uC774\uD130\uC5D0 \uB300\uD55C \uB0B4\uBD80 \uD50C\uB798\uC2DC \uC0AC\uC6A9\uB7C9\uC774 10KB\uB97C \uB118\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "font-layouts"
  }), `\uAE00\uAF34 \uB808\uC774\uC544\uC6C3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCEF4\uD30C\uC77C\uB41C \uAE00\uAF34\uC5D0 \uB300\uD574 \uB450 \uAC00\uC9C0 \uAE00\uAF34 \uB808\uC774\uC544\uC6C3\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. Configurations \uD0ED\uC758 TouchGFX Designer\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uB808\uC774\uC544\uC6C3\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/fonts-in-unmapped-flash/designer-configuration-4.17.png",
    mdxType: "Figure"
  }, "\uAE00\uAF34 \uB808\uC774\uC544\uC6C3 \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\uB9E4\uD551 \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD`), `\uC740 \uAE30\uBCF8 \uAE00\uAF34 \uB808\uC774\uC544\uC6C3\uC73C\uB85C, \uAE00\uAF34\uC774 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uD50C\uB798\uC2DC(\uB0B4\uBD80 \uB610\uB294 \uC678\uBD80 QSPI \uD50C\uB798\uC2DC)\uC5D0 \uC800\uC7A5\uB418\uB294 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD`), `\uC740 \uC0C8\uB85C\uC6B4 \uAE00\uAF34 \uB808\uC774\uC544\uC6C3\uC785\uB2C8\uB2E4. \uC774 \uD615\uC2DD\uC5D0\uC11C\uB294 \uB300\uBD80\uBD84\uC758 \uAE00\uAF34 \uB370\uC774\uD130\uB97C \uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBCF4\uD1B5\uC740 SPI \uD50C\uB798\uC2DC\uC774\uC9C0\uB9CC, \uC5B4\uB5A4 \uC720\uD615\uC758 \uC2A4\uD1A0\uB9AC\uC9C0\uB4E0 \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mapped-storage-format"
  }), `\uB9E4\uD551 \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9E4\uD551 \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD\uC740 \uB450 \uAC1C\uC758 \uD14C\uC774\uBE14\uC5D0 \uAE00\uAF34 \uB370\uC774\uD130\uB97C \uBCF4\uAD00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCCAB \uBC88\uC9F8 \uD14C\uC774\uBE14\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `touchgfx::GlyphNode`), `\uC758 \uBC30\uC5F4\uC785\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 \uB192\uC774, \uB108\uBE44, \uC720\uB2C8\uCF54\uB4DC \uAC19\uC740 \uAC1C\uBCC4 \uBB38\uC790\uC758 \uC18D\uC131\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "generated/fonts/src/Table_verdana_20_4bpp.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FONT_TABLE_LOCATION_FLASH_PRAGMA
KEEP extern const touchgfx::GlyphNode glyphs_verdana_20_4bpp[] FONT_TABLE_LOCATION_FLASH_ATTRIBUTE =
{
    {     0, 0x0020,   0,   0,   0,   0,   7,   0,   0, 0x00 },
    {     0, 0x002C,   5,   7,   3,   1,   7,   0,   2, 0x00 },
    {    21, 0x0030,  11,  14,  14,   1,  13,   0,   0, 0x00 },
    {   105, 0x0032,  11,  14,  14,   1,  13,   0,   0, 0x00 },
    {   189, 0x0033,  11,  14,  14,   1,  13,   0,   0, 0x00 },
    {   273, 0x0034,  12,  14,  14,   0,  13,   0,   0, 0x00 },
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB450 \uBC88\uC9F8 \uD14C\uC774\uBE14(\uD070 \uAE00\uAF34\uC758 \uACBD\uC6B0 \uC5EC\uB7EC \uD30C\uC77C\uB85C \uBD84\uD560)\uC5D0\uB294 \uBB38\uC790\uC758 \uD53D\uC140 \uD328\uD134\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "generated/fonts/src/Font_verdana_20_4bpp_0.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FONT_GLYPH_LOCATION_FLASH_PRAGMA
KEEP extern const uint8_t unicodes_verdana_20_4bpp_0[] FONT_GLYPH_LOCATION_FLASH_ATTRIBUTE =
{
    // Unicode: [0x0020]
    // (Has no glyph data)
    // Unicode: [0x002C]
    0x00, 0x87, 0x04, 0x20, 0xFF, 0x03, 0x60, 0xBF, 0x00, 0xA0, 0x5F, 0x00, 0xE0, 0x0D, 0x00, 0xF3,
    0x07, 0x00, 0xF6, 0x01, 0x00,
    // Unicode: [0x0030]
    0x00, 0xA3, 0xFE, 0x9D, 0x01, 0x00, 0x40, 0xFF, 0x9B, 0xFC, 0x1D, 0x00, 0xD0, 0x4F, 0x00, 0x80,
    0x9F, 0x00, 0xF3, 0x0B, 0x00, 0x10, 0xEE, 0x00, 0xF7, 0x07, 0x00, 0x00, 0xFB, 0x03, 0xF9, 0x06,
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `GlyphNode\uB294 \uD14D\uC2A4\uD2B8 \uB808\uC774\uC544\uC6C3 \uC2DC TouchGFX \uC5D4\uC9C4\uC5D0\uC11C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uADF8\uB9AC\uAE30\uB97C \uD558\uB294 \uB3D9\uC548 DMA2D \uB610\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB8E8\uD2F4\uC5D0\uC11C \uD53D\uC140\uC744 \uC77D\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18 LCD \uD074\uB798\uC2A4(LCD16bpp \uB610\uB294 LCD24bpp)\uB97C \uC0AC\uC6A9\uD558\uB294 \uD50C\uB7AB\uD3FC\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uD14C\uC774\uBE14\uB4E4\uC744 \uBC18\uB4DC\uC2DC \uB0B4\uBD80 \uD50C\uB798\uC2DC\uB098 \uBA54\uBAA8\uB9AC \uB9E4\uD551\uB41C \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LCD16bppSerialFlash\uB97C \uC0AC\uC6A9\uD558\uB294 \uD50C\uB7AB\uD3FC\uC5D0\uC11C\uB294 \uB80C\uB354\uB9C1 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uAC00 \uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uC9C1\uB82C \uD50C\uB798\uC2DC\uC5D0\uC11C \uD53D\uC140 \uD328\uD134\uC744 \uC77D\uC744 \uC218 \uC788\uC9C0\uB9CC, GlyphNode\uB294 \uB0B4\uBD80 \uD50C\uB798\uC2DC(\uC9C1\uC811 \uAC80\uC0C9\uB428)\uC5D0 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB808\uC774\uC544\uC6C3\uC740 \uAC01 \uBB38\uC790\uB9C8\uB2E4 \uB0B4\uBD80 \uD50C\uB798\uC2DC 14\uBC14\uC774\uD2B8\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "unmapped-storage-format"
  }), `\uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD\uC740 \uAE00\uAF34 \uB370\uC774\uD130\uB97C \uC138 \uAC1C\uC758 \uD14C\uC774\uBE14\uB85C \uBD84\uD560\uD569\uB2C8\uB2E4. \uB9E4\uD551 \uC2A4\uD1A0\uB9AC\uC9C0 \uB808\uC774\uC544\uC6C3\uC5D0\uC11C \uB098\uC628 \uB450 \uAC1C\uC758 \uD14C\uC774\uBE14\uC774 \uC7AC\uC0AC\uC6A9\uB418\uC9C0\uB9CC, \uC138 \uBC88\uC9F8 \uD14C\uC774\uBE14\uC740 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "generated/fonts/src/Table_verdana_20_4bpp.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FONT_SEARCHTABLE_LOCATION_FLASH_PRAGMA
KEEP extern const uint16_t unicodelist_verdana_20_4bpp[] FONT_SEARCHTABLE_LOCATION_FLASH_ATTRIBUTE =
{
    0x0020,
    0x002E,
    0x003F,
    0x004E,
    0x0054,
    ....
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC138 \uBC88\uC9F8 \uD14C\uC774\uBE14\uC5D0\uB294 \uAE00\uAF34\uC5D0 \uC788\uB294 \uC720\uB2C8\uCF54\uB4DC\uB9CC \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uAE00\uAF34 \uB808\uC774\uC544\uC6C3\uC744 \uC0AC\uC6A9\uD560 \uB54C \uC138 \uBC88\uC9F8 \uD14C\uC774\uBE14\uC740 \uBC18\uB4DC\uC2DC \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC788\uC5B4\uC57C \uD558\uC9C0\uB9CC, \uB098\uBA38\uC9C0 \uB450 \uD14C\uC774\uBE14\uC740 \uC678\uBD80 \uD50C\uB798\uC2DC\uB85C \uC774\uB3D9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC138 \uBC88\uC9F8 \uD14C\uC774\uBE14\uC740 \uAC01 \uBB38\uC790\uC5D0 2\uBC14\uC774\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC18\uBA74, GlyphNode \uD14C\uC774\uBE14\uC740 14\uBC14\uC774\uD2B8\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uB294 \uC810\uC5D0\uC11C \uC0C1\uB2F9\uD55C \uC808\uAC10 \uD6A8\uACFC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC758 \uC800\uC7A5 \uC694\uAD6C \uC0AC\uD56D\uC774 \uC904\uC5B4\uB4ED\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "font-data-reader"
  }), `\uAE00\uAF34 \uB370\uC774\uD130 \uB9AC\uB354`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAE00\uAF34 \uB370\uC774\uD130\uAC00 \uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB418\uBA74 MCU\uAC00 \uC774\uB97C \uC9C1\uC811 \uC561\uC138\uC2A4\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. We therefore have to provide a flash reader object to the font subsystem. The code for this is automatically generated by TouchGFX Generator:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{12-12}",
    "{12-12}": true
  }), `static TouchGFXDataReader dataReader;
static LCD16bppSerialFlash display(dataReader);
static ApplicationFontProvider fontProvider;
static Texts texts;
static TouchGFXHAL hal(dma, display, tc, 240, 320);
void touchgfx_init()
{
  Bitmap::registerBitmapDatabase(BitmapDatabase::getInstance(), BitmapDatabase::getInstanceSize());
  TypedText::registerTexts(&texts);
  Texts::setLanguage(0);
  hal.setDataReader(&dataReader);
  fontProvider.setFlashReader(&dataReader);
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC218\uB3D9\uC73C\uB85C \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\uC5D0\uC11C \uD568\uC218\uB97C \uAD6C\uD604\uD574\uC57C\uB9CC \uD50C\uB798\uC2DC\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC2E4\uC81C\uB85C \uC77D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "summary"
  }), `\uC694\uC57D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAE00\uAF34 \uB370\uC774\uD130\uB294 2~3\uAC1C\uC758 \uD14C\uC774\uBE14\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC544\uB798 \uD45C\uB294 \uD50C\uB798\uC2DC \uC800\uC7A5\uC744 \uB098\uD0C0\uB0B8 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD14C\uC774\uBE14(\uC774\uB984 \uC608)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB9E4\uD551 \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uC2A4\uD1A0\uB9AC\uC9C0 \uD615\uC2DD`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GlyphNodes in glyphs_verdana_20_4bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Pixel data in unicodes_verdana_20_4bpp_0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Unicodes in unicodelist_verdana_20_4bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBBF8\uC0AC\uC6A9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example"
  }), `\uC608\uC81C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC0C8 \uAE00\uAF34 \uB808\uC774\uC544\uC6C3\uC744 \uC0AC\uC6A9\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC2A4\uD06C\uB9B0\uC0F7\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/fonts-in-unmapped-flash/example1.png",
    mdxType: "Figure"
  }, "\uD55C\uC790 4000\uC790\uAC00 \uD3EC\uD568\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC608\uC81C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 MB1642A \uB514\uC2A4\uD50C\uB808\uC774 \uBAA8\uB4C8\uC774 \uC7A5\uCC29\uB41C STM32G071 Nucleo \uBCF4\uB4DC\uC5D0\uC11C \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/fonts-in-unmapped-flash/g071.png",
    width: "400",
    mdxType: "Figure"
  }, "STM32G071 Nucleo\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC608\uC81C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uB294 20\uBE44\uD2B8(\uD53D\uC140\uB2F9 4\uBE44\uD2B8) \uD06C\uAE30\uC758 \uD55C\uC790 4000\uC790\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uB370\uC774\uD130\uB294 STM32G071\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C 128Kb\uC911 61Kb \uCC28\uC9C0\uD569\uB2C8\uB2E4. \uAE00\uAF34 \uB370\uC774\uD130\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uBC30\uD3EC\uB429\uB2C8\uB2E4(\uB9C8\uC774\uB108 \uAC1D\uCCB4 \uC81C\uC678).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD14C\uC774\uBE14`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC704\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD06C\uAE30`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GlyphNodes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80 SPI \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `57,372 \uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD53D\uC140 \uD328\uD134`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80 SPI \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3.116.296 \uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC720\uB2C8\uCF54\uB4DC \uBAA9\uB85D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8,000 \uBC14\uC774\uD2B8`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "linker-script-modifications"
  }), `\uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uAE00\uAF34 \uB808\uC774\uC544\uC6C3\uC744 \uC62C\uBC14\uB974\uAC8C \uC0AC\uC6A9\uD558\uB824\uBA74 \uD14C\uC774\uBE14\uC744 \uC62C\uBC14\uB974\uAC8C \uBC30\uCE58\uD558\uB3C4\uB85D \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `define symbol __ICFEDIT_region_ROM_start__ = 0x08000000;
define symbol __ICFEDIT_region_ROM_end__   = 0x0801FFFF;
define symbol __ICFEDIT_region_RAM_start__ = 0x20000000;
define symbol __ICFEDIT_region_RAM_end__   = 0x20008FFF;
define symbol __ICFEDIT_region_SERIAL_FLASH_start__ = 0x90000000;
define symbol __ICFEDIT_region_SERIAL_FLASH_end__   = 0x91000000;

place in ROM_region   { readonly };
place in RAM_region   { readwrite,
                        block CSTACK, block HEAP };

place in SERIAL_FLASH_region {section ExtFlashSection, section FontFlashSection };
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C\uB294 ExtFlashSection(\uC774\uBBF8\uC9C0 \uBC0F \uAE00\uAF34 \uD53D\uC140)\uACFC FontFlashSection(GlyphNodes)\uC774 \uBAA8\uB450 \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uBAA8\uB4E0 \uC77D\uAE30 \uC804\uC6A9 \uB370\uC774\uD130\uB294 \uB0B4\uBD80 \uD50C\uB798\uC2DC(ROM_region)\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);