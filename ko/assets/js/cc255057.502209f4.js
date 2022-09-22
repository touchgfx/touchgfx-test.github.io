"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1819],{

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

/***/ 29415:
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
  d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
}));
class FurtherReading extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-further-reading)",
      header: "Further reading",
      type: "further-reading",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (FurtherReading);


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

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


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

/***/ 37793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  viewBox: "0 0 12 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
}));
class Tip extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-tip)",
      header: "Tip",
      type: "tip",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Tip);


/***/ }),

/***/ 97684:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93054);
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37793);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39130);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31217);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22425);
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
  id: "texture-mapper",
  title: "Texture Mapper"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/ui-components/images/texture-mapper",
  "id": "development/ui-development/ui-components/images/texture-mapper",
  "title": "Texture Mapper",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/texture-mapper.mdx",
  "sourceDirName": "development/ui-development/ui-components/images",
  "slug": "/development/ui-development/ui-components/images/texture-mapper",
  "permalink": "/4.20/ko/docs/development/ui-development/ui-components/images/texture-mapper",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "texture-mapper",
    "title": "Texture Mapper"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Animated Image",
    "permalink": "/4.20/ko/docs/development/ui-development/ui-components/images/animated-image"
  },
  "next": {
    "title": "Containers",
    "permalink": "/4.20/ko/docs/category/containers"
  }
};
const assets = {};







const toc = [{
  value: "\uC704\uC82F \uADF8\uB8F9",
  id: "widget-group",
  level: 2
}, {
  value: "\uC18D\uC131",
  id: "properties",
  level: 2
}, {
  value: "\uC6D0\uC810 \uBC0F \uCE74\uBA54\uB77C",
  id: "origo--camera",
  level: 3
}, {
  value: "\uC778\uD130\uB799\uC158",
  id: "interactions",
  level: 2
}, {
  value: "\uC561\uC158",
  id: "actions",
  level: 3
}, {
  value: "\uD2B8\uB9AC\uAC70",
  id: "triggers",
  level: 3
}, {
  value: "\uC131\uB2A5",
  id: "performance",
  level: 2
}, {
  value: "\uC608\uC81C",
  id: "examples",
  level: 2
}, {
  value: "\uC0DD\uC131 \uCF54\uB4DC",
  id: "generated-code",
  level: 3
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC",
  id: "user-code",
  level: 3
}, {
  value: "TouchGFX Designer Example",
  id: "touchgfx-designer-examples",
  level: 3
}, {
  value: "API \uCC38\uC870",
  id: "api-reference",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Texture Mapper\uB294 \uC870\uC815 \uAC00\uB2A5\uD55C \uC6D0\uC810\uC744 \uC911\uC2EC\uC73C\uB85C \uC790\uC720\uB86D\uAC8C \uD655\uB300/\uCD95\uC18C\uD558\uAC70\uB098 \uD68C\uC804\uD558\uBA74\uC11C \uBC14\uB00C\uB294 \uC774\uBBF8\uC9C0\uB97C \uADF8\uB9B4 \uC218 \uC788\uB294 \uC704\uC82F\uC785\uB2C8\uB2E4. \uB610\uD55C \uAC00\uC0C1 \uCE74\uBA54\uB77C\uB97C \uC801\uC6A9\uD558\uC5EC \uC6D0\uADFC\uAC10\uC744 \uAD6C\uD604\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4. \uC774\uB54C \uC6D0\uADFC\uAC10\uC758 \uD06C\uAE30\uB3C4 \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uC774 \uC704\uC82F\uC740 MCU \uBD80\uD558\uC5D0 \uC0C1\uB2F9\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uC774 \uC704\uC82F\uC740 \uD53D\uC140 \uC0C9 \uC2EC\uB3C4\uB2F9 1\uBE44\uD2B8\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/texture-mapper/widget-appearance.gif",
    mdxType: "Figure"
  }, "\uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 Texture Mapper"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "widget-group"
  }), `\uC704\uC82F \uADF8\uB8F9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Texture Mapper\uB294 TouchGFX Designer\uC758 Images \uC704\uC82F \uADF8\uB8F9\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/texture-mapper/widget-group-v4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 Texture Mapper"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "properties"
  }), `\uC18D\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C Texture Mapper\uC758 \uC18D\uC131\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC18D\uC131 \uADF8\uB8F9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC18D\uC131 \uC124\uBA85`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Name`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC704\uC82F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC774\uB984`), `\uC785\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC774\uB294 TouchGFX Designer\uC640 \uCF54\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uACE0\uC720 \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Location`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `X`), ` \uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Y`), `\uB294 \uC0C1\uC704 \uB178\uB4DC\uB97C \uAE30\uC900\uC73C\uB85C \uC704\uC82F\uC758 \uC67C\uCABD \uC0C1\uB2E8 \uBAA8\uD241\uC774\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `W`), ` \uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `H`), `\uB294 \uC704\uC82F\uC758 \uAC00\uB85C \uBC0F \uC138\uB85C \uAE38\uC774\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Lock`), `\uC740 \uD604\uC7AC\uC758 X, Y, W, H \uC704\uCE58\uC5D0\uC11C \uC704\uC82F\uC758 \uACE0\uC815 \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC704\uC82F\uC744 \uD604\uC7AC \uC704\uCE58\uC5D0 \uACE0\uC815\uC2DC\uD0A4\uBA74 \uC2A4\uD06C\uB9B0\uC744 \uD1B5\uD55C \uC704\uC82F \uC778\uD130\uB799\uC158\uB3C4 \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4. `), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Visible`), `\uC740 \uC704\uC82F\uC758 \uD45C\uC2DC \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC704\uC82F\uC744 \uBCF4\uC774\uC9C0 \uC54A\uAC8C \uD558\uBA74 \uC2A4\uD06C\uB9B0\uC744 \uD1B5\uD55C \uC704\uC82F \uC778\uD130\uB799\uC158\uB3C4 \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4`), `.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Animation Texture Mapper`), `\uB294 Texture Mapper\uC758 \uC560\uB2C8\uBA54\uC774\uC158 \uD14D\uC2A4\uCC98 \uB9E4\uD37C \uC0DD\uC131 \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Style`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Style`), `\uC740 \uC704\uC82F\uC758 \uC0AC\uC804 \uC124\uC815\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C \uC120\uD0DD\uD558\uB294 \uC18D\uC131\uC740 \uC0AC\uC804 \uC124\uC815 \uAC12\uC73C\uB85C \uC9C0\uC815\uB429\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC774 \uC2A4\uD0C0\uC77C\uC5D0\uB294 \uC790\uC720\uB86D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC774\uBBF8\uC9C0\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4`), `.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Image`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Image`), `\uB294 \uBCC0\uD615\uD560 \uC774\uBBF8\uC9C0\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Lock Image to Center`), `\uB294 \uC704\uC82F \uC911\uC2EC\uC5D0 \uB300\uD55C \uC774\uBBF8\uC9C0 \uC704\uCE58 \uACE0\uC815 \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uB2E8, \uB7F0\uD0C0\uC784 \uC2DC Texture Mapper\uC758 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD558\uBA74 \uC774 \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uB354\uB77C\uB3C4 \uC774\uBBF8\uC9C0\uC758 \uC911\uC2EC \uC704\uCE58\uAC00 \uC720\uC9C0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4`), `.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `X`), ` \uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Y`), `\uB294 \uC704\uC82F \uB0B4\uC5D0\uC11C \uBCC0\uD615\uD560 \uC774\uBBF8\uC9C0\uC758 \uC67C\uCABD \uC0C1\uB2E8 \uBAA8\uD241\uC774\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Angle & Scale`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `X Angle`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Y  Angle`), `\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Z Angle`), `\uC740 \uC704\uC82F \uB0B4\uC5D0\uC11C \uC774\uBBF8\uC9C0\uC758 \uD68C\uC804 \uBCC0\uD615\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC5EC\uAE30\uC5D0\uC11C \uAC01\uB3C4 \uB2E8\uC704\uB294 \uB77C\uB514\uC548\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Scale`), `\uC740 \uC704\uC82F \uB0B4\uC5D0\uC11C \uC774\uBBF8\uC9C0\uC758 \uD655\uB300/\uCD95\uC18C \uBCC0\uD615\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Origo`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Lock Origo to Center`), `\uB294 \uC704\uC82F\uC758 \uC911\uC2EC\uC5D0 \uB300\uD55C \uC774\uBBF8\uC9C0 \uD68C\uC804\uC810 \uACE0\uC815 \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uB2E8, \uB7F0\uD0C0\uC784 \uC2DC Texture Mapper\uC758 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD558\uBA74 \uC774 \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uB354\uB77C\uB3C4 \uAC00\uC6B4\uB370 \uC6D0\uC810 \uC704\uCE58\uAC00 \uC720\uC9C0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4`), `.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `X Origo`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Y Origo`), `\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Z Origo`), `\uB294 \uC704\uC82F \uB0B4\uC5D0\uC11C \uC774\uBBF8\uC9C0\uAC00 \uD68C\uC804\uD558\uACE0 \uD655\uB300/\uCD95\uC18C\uB418\uB294 \uC9C0\uC810\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\uC774 \uC18D\uC131\uC758 \uBCF5\uC7A1\uC131\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#origo--camera"
  }), `\uC6D0\uC810 \uBC0F \uCE74\uBA54\uB77C \uC139\uC158`), `\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Camera`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Camera Distance`), `\uB294 \uAC00\uC0C1 \uCE74\uBA54\uB77C\uC758 \uAC70\uB9AC\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC774 \uAC12\uC5D0 \uB530\uB77C \uC774\uBBF8\uC9C0 \uD68C\uC804 \uC2DC \uC6D0\uADFC\uAC10\uC758 \uD06C\uAE30\uB3C4 \uBC14\uB01D\uB2C8\uB2E4. `))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Appearance`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Rendering Algorithm`), `\uC740 \uC704\uC82F \uB0B4\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uB80C\uB354\uB9C1\uD560 \uB54C \uC0AC\uC6A9\uD560 \uC54C\uACE0\uB9AC\uC998\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC635\uC158\uC73C\uB85C\uB294 \uCD5C\uADFC\uC811 \uC774\uC6C3(Nearest-neighbour) \uC54C\uACE0\uB9AC\uC998\uACFC \uC591\uC120\uD615 \uBCF4\uAC04\uBC95(Bilinear Interpolation) \uC54C\uACE0\uB9AC\uC998\uC774 \uC788\uC2B5\uB2C8\uB2E4`), `.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Alpha`), `\uB294 \uC704\uC82F\uC758 \uD22C\uBA85\uB3C4\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC704\uC82F\uC758 \uC54C\uD30C \uAC12 \uBC94\uC704\uB294 0\uBD80\uD130 255\uAE4C\uC9C0\uC785\uB2C8\uB2E4. 0\uC740 \uC644\uC804 \uC644\uC804 \uD22C\uBA85\uC744, 255\uB294 \uBD88\uD22C\uBA85\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Mixins`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Draggable`), `\uC740 \uB7F0\uD0C0\uC784 \uC2DC \uC704\uC82F\uC758 \uB4DC\uB798\uADF8 \uAC00\uB2A5 \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `ClickListener`), `\uB294 \uD074\uB9AD\uD588\uC744 \uB54C \uC704\uC82F\uC758 \uCF5C\uBC31 \uC2E4\uD589 \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `FadeAnimator`), `\uB294 \uC704\uC82F\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC54C\uD30C `), ` \uAC12 \uBCC0\uACBD\uC5D0 \uB300\uD55C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `MoveAnimator`), `\uB294 \uC704\uC82F\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `X`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Y`), ` \uAC12 \uBCC0\uACBD\uC5D0 \uB300\uD55C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "origo--camera"
  }), `\uC6D0\uC810 \uBC0F \uCE74\uBA54\uB77C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC6D0\uC810\uC740 \uC120\uD0DD\uD55C \uC774\uBBF8\uC9C0\uC758 \uBCC0\uD615\uC774 \uC77C\uC5B4\uB098\uB294 \uC9C0\uC810\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4. \uC88C\uD45C \uC18D\uC131\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `X Origo`), `\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Y Origo\uB294 `), ` \uC120\uD0DD\uD55C \uC774\uBBF8\uC9C0\uC758 \uAC00\uB85C \uBC0F \uC138\uB85C \uAE38\uC774\uAC00 \uC544\uB2CC Texture Mapper\uC758 \uAC00\uB85C \uBC0F \uC138\uB85C \uAE38\uC774\uC640 \uAD00\uB828\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC88C\uD45C \uC18D\uC131\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Z Origo\uB294`), ` Camera Distance `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC18D\uC131 \uAC12\uACFC \uAD00\uB828\uC774 \uC788\uC2B5\uB2C8\uB2E4`), `. \uC608\uB97C \uB4E4\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Camera Distance`), ` \uC18D\uC131 \uAC12\uC774 1000\uC73C\uB85C \uC124\uC815\uB418\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Z Origo`), ` \uC5ED\uC2DC 1000\uC73C\uB85C \uC124\uC815\uB418\uB294 \uCD95\uC744 \uC911\uC2EC\uC73C\uB85C \uC774\uBBF8\uC9C0\uAC00 \uD68C\uC804\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCC0\uD615 \uC704\uCE58\uB97C Texture Mapper\uC758 \uC911\uC2EC\uC73C\uB85C \uACE0\uC815\uD558\uB824\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Lock Origo to Center`), ` \uC635\uC158\uC5D0\uC11C \uD655\uC778\uB780\uC744 \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624. \uADF8\uB7EC\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `X Origo`), `\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Y Origo`), ` \uC18D\uC131\uC774 Texture Mapper\uC758 \uC911\uC2EC\uC73C\uB85C \uACE0\uC815\uB418\uACE0, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Z Origo`), ` \uC18D\uC131\uC774`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Camera Distance`), ` \uAC12\uC73C\uB85C \uACE0\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Camera Distance`), ` \uC18D\uC131\uC5D0 \uB530\uB77C \uC774\uBBF8\uC9C0 \uD68C\uC804 \uC2DC \uD45C\uC2DC\uB418\uB294 \uC6D0\uADFC\uAC10\uC758 \uD06C\uAE30\uB3C4 \uBC14\uB00C\uAC8C \uB429\uB2C8\uB2E4. \uADF8 \uBC16\uC5D0\uB3C4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Camera Distance`), ` \uC18D\uC131\uC774 \uAC00\uAE4C\uC6B8\uC218\uB85D FOV(Field Of View, \uD654\uAC01) \uAC00 \uCEE4\uC9C0\uAC8C \uB429\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uC778\uC9C0\uD560 \uC218 \uC788\uB294 \uC6D0\uADFC\uAC10\uC758 \uD06C\uAE30\uB3C4 \uC99D\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/texture-mapper/coordinate-setup.png",
    noShadow: true,
    mdxType: "Figure"
  }, "Texture Mapper\uC758 \uC6D0\uC810\uACFC \uCE74\uBA54\uB77C \uAC70\uB9AC\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC88C\uD45C\uACC4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "interactions"
  }), `\uC778\uD130\uB799\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Texture Mapper\uC5D0\uC11C \uC9C0\uC6D0\uB418\uB294 \uC561\uC158\uACFC \uD2B8\uB9AC\uAC70\uB294 \uB2E4\uC74C \uC139\uC158\uC5D0\uC11C \uC124\uBA85\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uD68C\uC804 \uB610\uB294 \uD655\uB300/\uCD95\uC18C \uC0C1\uD638\uC791\uC6A9\uC774 Texture Mapper\uC5D0 \uC801\uC6A9\uB418\uACE0, Texture Mapper\uC758 \uC9C0\uC18D \uC2DC\uAC04 \uB610\uB294 \uC9C0\uC5F0 \uC2DC\uAC04\uC774 0\uBCF4\uB2E4 \uD074 \uACBD\uC6B0\uC5D0\uB294 \uC560\uB2C8\uBA54\uC774\uC158 Texture Mapper\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "actions"
  }), `\uC561\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC704\uC82F\uBCC4 \uC561\uC158`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC124\uBA85`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Rotate Texture Mapper`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Texture Mapper\uB97C \uD604\uC7AC \uBC29\uD5A5 \uB610\uB294 \uD2B9\uC815 \uAC01\uB3C4\uC5D0 \uB300\uD55C x, y \uBC0F z\uCD95 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC6D0\uC810\uC744 `), ` \uC911\uC2EC\uC73C\uB85C \uD68C\uC804\uC2DC\uD0B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Scale Texture Mapper`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Texture Mapper\uB97C \uD604\uC7AC \uD06C\uAE30 \uB610\uB294 \uD2B9\uC815 \uD06C\uAE30\uB97C \uAE30\uC900\uC73C\uB85C \uD655\uB300/\uCD95\uC18C\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Resize widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC704\uC82F\uC758 \uAC00\uB85C \uBC0F \uC138\uB85C \uAE38\uC774\uB97C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD45C\uC900 \uC704\uC82F \uC561\uC158`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC124\uBA85`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Move widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC2DC\uAC04\uC774 \uC9C0\uB098\uBA74\uC11C \uC704\uC82F\uC744 \uC0C8\uB85C\uC6B4 \uC704\uCE58\uB85C \uC774\uB3D9\uC2DC\uD0B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Fade widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC2DC\uAC04\uC774 \uC9C0\uB098\uBA74\uC11C \uC704\uC82F\uC758 \uC54C\uD30C \uAC12\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Hide widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC704\uC82F\uC744 \uC228\uAE41\uB2C8\uB2E4(visibility\uB97C false\uB85C \uC124\uC815).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Show widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC228\uAE34 \uC704\uC82F\uC774 \uBCF4\uC774\uB3C4\uB85D \uB9CC\uB4ED\uB2C8\uB2E4(visibility\uB97C true\uB85C \uC124\uC815).`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "triggers"
  }), `\uD2B8\uB9AC\uAC70`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Texture Mapper\uB294 \uD2B8\uB9AC\uAC70\uB97C \uC2E4\uD589\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance"
  }), `\uC131\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Texture Mapper\uB294 \uC774\uBBF8\uC9C0\uB97C \uD655\uB300/\uCD95\uC18C\uD558\uAC70\uB098 \uD68C\uC804\uD560 \uB54C MCU\uC758 \uC601\uD5A5\uC744 \uB9CE\uC774 \uBC1B\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB300\uBD80\uBD84\uC758 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uAE4C\uB2E4\uB85C\uC6B4 \uC704\uC82F\uC73C\uB85C \uC54C\uB824\uC838 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB9AC\uAE30 \uC131\uB2A5\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../general-ui-component-performance"
  }), `\uC77C\uBC18 UI \uAD6C\uC131\uC694\uC18C \uC131\uB2A5`), ` \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `\uC608\uC81C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generated-code"
  }), `\uC0DD\uC131 \uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `View \uAE30\uBCF8 \uD074\uB798\uC2A4\uC758 \uC0DD\uC131 \uCF54\uB4DC\uB97C \uBCF4\uBA74 TouchGFX Designer\uC5D0\uC11C Texture Mapper\uAC00 \uC5B4\uB5BB\uAC8C \uC124\uC815\uB418\uB294\uC9C0 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1ViewBase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>
#include "BitmapDatabase.hpp"

Screen1ViewBase::Screen1ViewBase() :
    interaction1Counter(0)
{
    textureMapper.setXY(150, 46);
    textureMapper.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));
    textureMapper.setWidth(180);
    textureMapper.setHeight(180);
    textureMapper.setBitmapPosition(26.000f, 26.000f);
    textureMapper.setScale(1.000f);
    textureMapper.setCameraDistance(1000.000f);
    textureMapper.setOrigo(90.000f, 90.000f, 1000.000f);
    textureMapper.setCamera(90.000f, 90.000f);
    textureMapper.updateAngles(-0.500f, -0.500f, -0.500f);
    textureMapper.setRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);

    add(textureMapper);
}

void Screen1ViewBase::setupScreen()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC758 TextureMapper \uD074\uB798\uC2A4\uC5D0\uC11C \uC704\uC758 \uD568\uC218\uC640 \uB098\uBA38\uC9C0 \uD568\uC218\uB4E4\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC704\uC82F\uC758 \uBAA8\uC591\uC744 \uBC14\uAFB8\uACE0 \uC2F6\uB2E4\uBA74 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "textureMapper.invalidate()"), " \uD568\uC218\uB97C \uD638\uCD9C\uD558\uC5EC \uAC15\uC81C\uB85C \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Texture Mapper\uAC00 Animation Texture Mapper\uB85C \uC124\uC815\uB418\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uB450 \uAC00\uC9C0 \uCF5C\uBC31\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `setTextureMapperAnimationStepAction`), `\uC740 \uD604\uC7AC \uC560\uB2C8\uBA54\uC774\uC158\uC5D0\uC11C \uB2E8\uACC4\uB97C \uC2E4\uD589\uD560 \uB54C\uB9C8\uB2E4 \uD638\uCD9C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `setTextureMapperAnimationEndedAction`), `\uC740 \uBAA8\uB4E0 \uC5D0\uB2C8\uBA54\uC774\uC158\uC774 \uC885\uB8CC\uB418\uBA74 \uD638\uCD9C\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uB450 \uAC00\uC9C0 \uCF54\uB4DC\uB294 \uC704 \uB450 \uAC00\uC9C0 \uCF5C\uBC31\uC744 \uC124\uC815\uD558\uB294 \uBC29\uBC95\uC744 \uB098\uD0C0\uB0B8 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class Screen1View
{
public:
    Screen1View();
    virtual ~Screen1View() {}
    virtual void setupScreen();
    virtual void tearDownScreen();
private:
    /*
     * Callback Declarations
     */
    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperStepActionCallback;
    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperAnimationEndedCallback;

    /*
     * Callback Handler Declarations
     */
    void textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src);
    void textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src);
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/screen1_screen/Screen1View.hpp>

Screen1View::Screen1View() :
  textureMapperStepActionCallback(this, &Screen1View::textureMapperStepActionCallbackHandler),
  textureMapperAnimationEndedCallback(this, &Screen1View::textureMapperAnimationEndedCallbackHandler)
{
  textureMapper.setTextureMapperAnimationStepAction(textureMapperStepActionCallback);
  textureMapper.setTextureMapperAnimationEndedAction(textureMapperAnimationEndedCallback);
  add(textureMapper);
}

void Screen1View::textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src)
{
    if (&src == &textureMapper)
    {
        //execute code whenever the animation running in AnimationTextureMapper steps
    }
}

void Screen1View::textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src)
{
    if (&src == &textureMapper)
    {
        //execute code whenever the animation running in AnimationTextureMapper ends
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer-examples"
  }), `TouchGFX Designer Example`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Texture Mapper\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uB824\uBA74 TouchGFX Designer\uC5D0\uC11C \uB2E4\uC74C UI \uD15C\uD50C\uB9BF \uC911 \uD558\uB098\uB97C \uC0AC\uC6A9\uD574 \uC0C8\uB85C\uC6B4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-templates/texture-mapper-example-v4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 Texture Mapper Example UI \uD15C\uD50C\uB9BF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-templates/animation-texture-mapper-example-v4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 Animation Texture Mapper Example UI \uD15C\uD50C\uB9BF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "api-reference"
  }), `API \uCC38\uC870`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_texture_mapper",
    mdxType: "Link"
  }, "TextureMapper \uD074\uB798\uC2A4\uC5D0 \uB300\uD55C API \uCC38\uC870")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_animation_texture_mapper",
    mdxType: "Link"
  }, "AnimationTextureMapper \uD074\uB798\uC2A4\uC5D0 \uB300\uD55C API \uCC38\uC870"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);