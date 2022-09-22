"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[190],{

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

/***/ 29010:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37793);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31217);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39130);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22425);
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
  id: "scroll-wheel",
  title: "Scroll Wheel"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/ui-components/containers/scroll-wheel",
  "id": "development/ui-development/ui-components/containers/scroll-wheel",
  "title": "Scroll Wheel",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/scroll-wheel.mdx",
  "sourceDirName": "development/ui-development/ui-components/containers",
  "slug": "/development/ui-development/ui-components/containers/scroll-wheel",
  "permalink": "/4.20/ko/docs/development/ui-development/ui-components/containers/scroll-wheel",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scroll-wheel",
    "title": "Scroll Wheel"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scroll List",
    "permalink": "/4.20/ko/docs/development/ui-development/ui-components/containers/scroll-list"
  },
  "next": {
    "title": "Slide Menu",
    "permalink": "/4.20/ko/docs/development/ui-development/ui-components/containers/slide-menu"
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
  value: "Item Templates",
  id: "item-templates",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel\uC740 \uB2E4\uC218\uC758 \uD56D\uBAA9\uC774 \uD3EC\uD568\uB418\uC5B4 \uC2A4\uD06C\uB864\uC774 \uAC00\uB2A5\uD55C \uBA54\uB274\uC785\uB2C8\uB2E4. \uD720\uC5D0\uC11C \uC2A4\uD06C\uB864\uD558\uBA74 \uD56D\uBAA9\uB4E4\uC774 \uB3D9\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uBA70, \uC120\uD0DD\uD55C \uD56D\uBAA9\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uAC15\uC870 \uD45C\uC2DC\uB429\uB2C8\uB2E4. Scroll Wheel\uACFC \uC77C\uC5B4\uB098\uB294 \uC778\uD130\uB799\uC158\uC5D0 \uBC18\uC751\uD558\uB3C4\uB85D \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uBA74 \uD720\uC758 \uD56D\uBAA9\uACFC \uC77C\uC5B4\uB098\uB294 \uC778\uD130\uB799\uC158\uC5D0 \uB530\uB77C \uB2E4\uC591\uD55C \uCF5C\uBC31\uC744 \uD638\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/scroll-wheel/widget-appearance.gif",
    mdxType: "Figure"
  }, "\uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 Scroll Wheel"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "widget-group"
  }), `\uC704\uC82F \uADF8\uB8F9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel\uC740 TouchGFX Designer\uC758 Containers \uC704\uC82F \uADF8\uB8F9\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/scroll-wheel/widget-group-v4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 Scroll Wheel"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "properties"
  }), `\uC18D\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C Scroll Wheel\uC758 \uC18D\uC131\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }, `Type`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Type\uC740 `), ` Scroll Wheel\uC758 \uC138\uB85C \uB610\uB294 \uAC00\uB85C \uBC29\uD5A5\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }, `H`), `\uB294 \uC704\uC82F\uC758 \uAC00\uB85C \uBC0F \uC138\uB85C \uAE38\uC774\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Lock`), `\uC740 \uD604\uC7AC\uC758 X, Y, W, H \uC704\uCE58\uC5D0\uC11C \uC704\uC82F\uC758 \uACE0\uC815 \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC704\uC82F\uC744 \uD604\uC7AC \uC704\uCE58\uC5D0 \uACE0\uC815\uC2DC\uD0A4\uBA74 \uC2A4\uD06C\uB9B0\uC744 \uD1B5\uD55C \uC704\uC82F \uC778\uD130\uB799\uC158\uB3C4 \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Visible`), `\uC740 \uC704\uC82F\uC758 \uD45C\uC2DC \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\uC704\uC82F\uC744 \uBCF4\uC774\uC9C0 \uC54A\uAC8C \uD558\uBA74 \uC2A4\uD06C\uB9B0\uC744 \uD1B5\uD55C \uC704\uC82F \uC778\uD130\uB799\uC158\uB3C4 \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Item Template`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Item Template`), `\uC740 \uD15C\uD50C\uB9BF\uC73C\uB85C \uC0AC\uC6A9\uD560 CustomContainer\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Number of Items`), `\uB294 Scroll Wheel\uC5D0 \uD3EC\uD568\uB418\uB294 \uD56D\uBAA9 \uC218\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Initial Selected Item`), `\uC740 \uCC98\uC74C\uC5D0 \uC120\uD0DD\uB418\uB294 \uD56D\uBAA9\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Use Selected Style Template`), `\uC740 \uC120\uD0DD\uD55C \uD56D\uBAA9\uC5D0 \uB300\uD55C \uBCC4\uB3C4\uC758 \uD15C\uD50C\uB9BF \uC0AC\uC6A9 \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Selected Style Template\uC740 `), ` \uC120\uD0DD\uD55C \uD15C\uD50C\uB9BF\uC73C\uB85C \uC0AC\uC6A9\uD560 CustomContainer\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `List Appearance`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Circular`), `\uB294 \uC2A4\uD06C\uB864\uC774 \uB05D\uC5D0 \uB3C4\uB2EC\uD588\uC744 \uB54C Scroll Wheel \uD56D\uBAA9\uC758 \uC21C\uD658 \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Selected Item Offset`), `\uC740 \uC120\uD0DD\uD55C \uD56D\uBAA9\uC758 \uC704\uCE58\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Item Margin`), `\uC740 \uD56D\uBAA9 \uAC04 \uAC04\uACA9\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Extra Size Before`), ` \uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Extra Size After`), `\uB294 \uC704\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Selected Style Template`), ` \uC18D\uC131\uC774 \uD45C\uC2DC\uB418\uB294 \uC601\uC5ED\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Margin Before`), `\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Margin After`), `\uB294 \uC704\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Selected Style Template`), ` \uC18D\uC131\uC774 \uD45C\uC2DC\uB418\uB294 \uC601\uC5ED \uC55E\uB4A4 \uC5EC\uBC31\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Animation`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Easing`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Easing Option`), `\uC740  \uC560\uB2C8\uBA54\uC774\uC158\uC5D0 \uC0AC\uC6A9\uD560 \uC644\uD654 \uBC29\uC815\uC2DD(easing euation) \uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Swipe Acc.`), ` \uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Drag Acc. `), `\uB294 \uC2A4\uD06C\uB864 \uC2DC \uAC00\uC18D\uB3C4\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }, `ClickListener`), `\uB294 \uD074\uB9AD\uD588\uC744 \uB54C \uC704\uC82F\uC758 \uCF5C\uBC31 \uC2E4\uD589 \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `MoveAnimator`), `\uB294 \uC704\uC82F\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `X`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Y`), ` \uAC12 \uBCC0\uACBD\uC5D0 \uB300\uD55C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC \uC5EC\uBD80\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "item-templates"
  }), `Item Templates`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll List\uC758 \uD56D\uBAA9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Item Template`), ` \uAC1C\uB150\uC744 \uB530\uB985\uB2C8\uB2E4. Item Template\uC774\uB780 Scroll Wheel\uC758 \uD56D\uBAA9\uC5D0\uAC8C \uADF8\uB798\uD53D \uC694\uC18C\uB97C \uC704\uD55C \uAE30\uCD08 \uC5ED\uD560\uC744 \uD558\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-engine-features/custom-containers"
  }), `CustomContainer`), `\uB97C \uB9D0\uD569\uB2C8\uB2E4. \uC120\uD0DD\uD55C \uD56D\uBAA9\uC744 \uAC15\uC870 \uD45C\uC2DC\uD560 \uB54C Scroll Wheel\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Selected Style Template\uC774\uB77C\uB294 `), ` \uC774\uB984\uC758 Item Template\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uC635\uC158\uC774 \uC788\uB294\uB370, \uC774 Item Template\uC740 \uC120\uD0DD\uD55C \uD56D\uBAA9\uC5D0\uC11C\uB9CC \uC0AC\uC6A9\uB429\uB2C8\uB2E4. Scroll Wheel\uC744 \uC0DD\uC131\uD558\uB824\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Selected Style Template`), ` \uC18D\uC131(\uD65C\uC131\uD654\uB41C \uACBD\uC6B0) \uACFC \uD568\uAED8 Item Template\uC73C\uB85C \uC0AC\uC6A9\uD560 CustomContainer\uB97C \uBA3C\uC800 \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel\uC744 \uC0DD\uC131\uD55C \uD6C4\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Item Template`), ` \uC18D\uC131 \uC544\uB798\uC5D0\uC11C CustomContainer\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC5B4\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Item Template`), ` \uC18D\uC131\uC5D0\uC11C Custom Container\uB97C \uC120\uD0DD\uD558\uBA74 Scroll Wheel\uC774 \uC120\uD0DD\uD55C Custom Container\uC5D0\uC11C \uC2A4\uD06C\uB864 \uAC00\uB2A5\uD55C \uBC29\uD5A5\uC774 \uC544\uB2CC \uD06C\uAE30 \uC18D\uC131(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC138\uB85C \uBC29\uD5A5\uC758 \uACBD\uC6B0 \uAC00\uB85C \uAE38\uC774, \uAC00\uB85C \uBC29\uD5A5\uC758 \uACBD\uC6B0 \uC138\uB85C \uAE38\uC774`), `) \uC5D0 \uB9DE\uCDB0 \uD06C\uAE30\uAC00 \uBCC0\uACBD\uB429\uB2C8\uB2E4. \uB098\uBA38\uC9C0 \uD06C\uAE30 \uC18D\uC131(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC138\uB85C \uBC29\uD5A5\uC758 \uACBD\uC6B0 \uC138\uB85C \uAE38\uC774, \uAC00\uB85C \uBC29\uD5A5\uC758 \uACBD\uC6B0 \uAC00\uB85C \uAE38\uC774`), `) \uC744 \uBCC0\uACBD\uD558\uBA74 \uD45C\uC2DC\uD560 \uC218 \uC788\uB294 \uD56D\uBAA9\uC758 \uC218\uAC00 \uACB0\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "interactions"
  }), `\uC778\uD130\uB799\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel\uC5D0\uC11C \uC9C0\uC6D0\uB418\uB294 \uC561\uC158\uACFC \uD2B8\uB9AC\uAC70\uB294 \uB2E4\uC74C \uC139\uC158\uC5D0\uC11C \uC124\uBA85\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
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
  }), `\uD2B8\uB9AC\uAC70`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel\uC740 \uD2B8\uB9AC\uAC70\uB97C \uC2E4\uD589\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance"
  }), `\uC131\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "container"
  }), `Container`), ` \uC720\uD615\uC73C\uB85C, \uAE30\uBCF8\uC801\uC73C\uB85C \uB4DC\uB85C\uC6B0 \uCCB4\uC778\uC5D0 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC131\uB2A5\uC740 \uC804\uC801\uC73C\uB85C \uD558\uC704 \uB178\uB4DC\uC758 \uADF8\uB9AC\uAE30 \uC131\uB2A5\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB9AC\uAE30 \uC131\uB2A5\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../general-ui-component-performance"
  }), `\uC77C\uBC18 UI \uAD6C\uC131\uC694\uC18C \uC131\uB2A5`), ` \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `\uC608\uC81C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generated-code"
  }), `\uC0DD\uC131 \uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `View \uAE30\uBCF8 \uD074\uB798\uC2A4\uC758 \uC0DD\uC131 \uCF54\uB4DC\uB97C \uBCF4\uBA74TouchGFX Designer\uC5D0\uC11C Scroll Wheel\uC774 \uC5B4\uB5BB\uAC8C \uC124\uC815\uB418\uB294\uC9C0 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1ViewBase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>
#include "BitmapDatabase.hpp"

Screen1ViewBase::Screen1ViewBase() :
    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)
{
    scrollWheel.setPosition(140, 10, 200, 252);
    scrollWheel.setHorizontal(false);
    scrollWheel.setCircular(false);
    scrollWheel.setEasingEquation(touchgfx::EasingEquations::backEaseIn);
    scrollWheel.setSwipeAcceleration(10);
    scrollWheel.setDragAcceleration(10);
    scrollWheel.setNumberOfItems(60);
    scrollWheel.setSelectedItemOffset(100);
    scrollWheel.setSelectedItemExtraSize(0, 0);
    scrollWheel.setSelectedItemMargin(0, 0);
    scrollWheel.setDrawableSize(50, 3);
    scrollWheel.setDrawables(scrollWheelListItems, updateItemCallback,
                              scrollWheelSelectedListItems, updateItemCallback);
    scrollWheel.animateToItem(0, 0);

    add(scrollWheel);
}

void Screen1ViewBase::setupScreen()
{
    scrollWheel.initialize();
    for (int i = 0; i < scrollWheelListItems.getNumberOfDrawables(); i++)
    {
        scrollWheelListItems[i].initialize();
    }
    for (int i = 0; i < scrollWheelSelectedListItems.getNumberOfDrawables(); i++)
    {
        scrollWheelSelectedListItems[i].initialize();
    }
}

void Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)
{
    if (items == &scrollWheelListItems)
    {
        touchgfx::Drawable* d = items->getDrawable(containerIndex);
        TextContainer* cc = (TextContainer*)d;
        scrollWheelUpdateItem(*cc, itemIndex);
    }
    else if (items == &scrollWheelSelectedListItems)
    {
        touchgfx::Drawable* d = items->getDrawable(containerIndex);
        TextCenterContainer* cc = (TextCenterContainer*)d;
        scrollWheelUpdateCenterItem(*cc, itemIndex);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC758 ScrollWheel \uD074\uB798\uC2A4\uC5D0\uC11C \uC704\uC758 \uD568\uC218\uC640 \uB098\uBA38\uC9C0 \uD568\uC218\uB4E4\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC704\uC82F\uC758 \uBAA8\uC591\uC744 \uBC14\uAFB8\uACE0 \uC2F6\uB2E4\uBA74 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "scrollWheel.invalidate()"), " \uD568\uC218\uB97C \uD638\uCD9C\uD558\uC5EC \uAC15\uC81C\uB85C \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2A4\uD06C\uB864 \uD720\uC758 \uADF8\uB798\uD53D \uC694\uC18C\uC640 \uC18D\uC131\uC5D0 \uB300\uD55C \uC124\uC815\uC744 \uB9C8\uCCE4\uB2E4\uBA74 \uC774\uC81C \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uC5EC Scroll Wheel\uC758 \uD56D\uBAA9\uB4E4\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 Screen1ViewBase \uD074\uB798\uC2A4 \uD5E4\uB354 \uD30C\uC77C\uC740 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1ViewBase.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-11,13-16}",
    "{8-11,13-16}": true
  }), `class Screen1ViewBase : public touchgfx::View
{
public:
    Screen1ViewBase();
    virtual ~Screen1ViewBase() {}
    virtual void setupScreen();

    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)
    {
        // Override and implement this function in Screen1
    }

    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)
    {
        // Override and implement this function in Screen1
    }

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(Application::getInstance());
    }

    touchgfx::BoxWithBorder boxWithBorder1;
    touchgfx::ScrollWheelWithSelectionStyle scrollWheel1;
    touchgfx::DrawableListItems<CustomContainer1, 6> scrollWheel1ListItems;
    touchgfx::DrawableListItems<CustomContainer2, 2> scrollWheel1SelectedListItems;

private:
    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);
    touchgfx::Callback<Screen1ViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uAC00 Scroll Wheel \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uBA74 \uC704\uC5D0\uC11C \uAC15\uC870 \uD45C\uC2DC\uB41C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollWheel1UpdateItem`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollWheel1UpdateCenterItem`), ` \uD568\uC218\uAC00 \uC0DD\uC131\uB418\uC5B4 \uC0AC\uC6A9\uC790\uAC00 Scroll Wheel\uC758 \uD56D\uBAA9\uB4E4\uC744 \uC7AC\uC815\uC758\uD558\uACE0 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `UpdateItem`), ` \uD568\uC218\uB294 \uC5B8\uC81C\uB4E0\uC9C0 Scroll Wheel\uC5D0 \uC0DD\uC131\uD558\uACE0 \uAD6C\uD604\uD558\uC5EC \uD3EC\uD568\uB41C \uD56D\uBAA9\uB4E4\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uB294 \uBC18\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `UpdateCenterItem`), ` \uD568\uC218\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Selected Style Template`), ` \uC18D\uC131\uC5D0 \uB530\uB77C \uD56D\uBAA9\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30 \uB54C\uBB38\uC5D0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Selected Style Template`), ` \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uB3C4\uB85D \uC120\uD0DD\uD55C \uACBD\uC6B0\uC5D0\uB9CC \uC0DD\uC131\uB429\uB2C8\uB2E4. \uB450 \uD568\uC218\uB294 \uC5EC\uB7EC \uD56D\uBAA9\uB4E4\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uAE30\uB2A5 \uC678\uC5D0\uB3C4 Scroll Wheel\uC758 \uD56D\uBAA9\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uB54C \uC0AC\uC6A9\uB418\uB294 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uB3D9\uC77C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uB098\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), ` \uB9E4\uAC1C\uBCC0\uC218\uB85C\uC11C, \uD56D\uBAA9\uC758 \uC778\uB371\uC2A4 \uAC12\uC774 \uD3EC\uD568\uB418\uC5B4 \uC5C5\uB370\uC774\uD2B8 \uC911\uC778 \uD56D\uBAA9\uC744 \uC2DD\uBCC4\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB098\uBA38\uC9C0 \uD558\uB098\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `item`), ` \uB9E4\uAC1C\uBCC0\uC218\uB85C\uC11C, Scroll Wheel\uC5D0 \uD45C\uC2DC\uB418\uB294 \uD56D\uBAA9\uC5D0 \uB300\uD55C \uCC38\uC870\uC785\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `item`), ` \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uB530\uB77C \uBAA8\uC2B5\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uBA74 Scroll Wheel\uC5D0 \uD45C\uC2DC\uB418\uB294 \uD56D\uBAA9\uC5D0 \uB300\uD55C \uB80C\uB354\uB9C1\uC774 \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD30C\uC77C\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View.hpp`), `\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View.cpp`), `\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollWheel1UpdateItem`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollWheel1UpdateCenterItem`), ` \uD568\uC218\uB97C \uAD6C\uD604\uD55C \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifndef SCREEN1_VIEW_HPP
#define SCREEN1_VIEW_HPP

#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>
#include <gui/screen1_screen/Screen1Presenter.hpp>

class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    virtual~Screen1View() {}
    virtual void setupScreen();
    virtual void tearDownScreen();

    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex);
    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex);
protected:
};

#endif // SCREEN1_VIEW_HPP
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/screen1_screen/Screen1View.hpp>

Screen1View::Screen1View()
{

}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();
}

void Screen1View::tearDownScreen()
{
    Screen1ViewBase::tearDownScreen();
}

void Screen1View::scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)
{
    item.setIndex(itemIndex);
}

void Screen1View::scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)
{
    item.setIndex(itemIndex);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View.hpp`), ` \uD5E4\uB354 \uD30C\uC77C\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollWheel1UpdateItem`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollWheel1UpdateCenterItem`), ` \uD568\uC218\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View.cpp`), `\uC5D0\uC11C \uC7AC\uC815\uC758\uB41C \uD6C4 \uAD6C\uD604\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC608\uC81C\uC758 \uBAA9\uC801\uC740 \uD45C\uC2DC\uB418\uB294 \uD56D\uBAA9\uC758 \uC778\uB371\uC2A4 \uAC12\uC744 \uC774\uC6A9\uD574 Item Template\uC758 \uD14D\uC2A4\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uAE30 \uC704\uD55C \uAC83\uC73C\uB85C, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "scroll-wheel"
  }), `\uC774 \uC139\uC158\uC758 \uCD08\uBC18`), `\uC5D0 \uC81C\uC2DC\uB41C \uC608\uC81C\uC640 \uBE44\uC2B7\uD569\uB2C8\uB2E4. Item Template\uACFC Selected Style Template\uC774 CustomContainer\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uAE30 \uB54C\uBB38\uC5D0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setIndex`), ` \uD568\uC218\uAC00 \uB450 CustomContainer\uC5D0 \uBAA8\uB450 \uC0DD\uC131\uB429\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setIndex`), ` \uD568\uC218\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), ` \uB9E4\uAC1C\uBCC0\uC218\uB97C \uD1B5\uD574 Item Template\uACFC Selected Style Template\uC758 \uD14D\uC2A4\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C item \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uB9DE\uCDB0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setIndex`), ` \uD568\uC218\uB97C \uD638\uCD9C\uD558\uBA74 \uD45C\uC2DC\uB418\uB294 \uD56D\uBAA9\uC758 \uBAA8\uC2B5\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5B4 \uC778\uB371\uC2A4 \uAC12\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer-examples"
  }), `TouchGFX Designer Example`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uB824\uBA74 TouchGFX Designer\uC5D0\uC11C \uB2E4\uC74C UI \uD15C\uD50C\uB9BF \uC911 \uD558\uB098\uB97C \uC0AC\uC6A9\uD574 \uC0C8\uB85C\uC6B4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-templates/scroll-wheel-and-list-example-v4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 Scroll Wheel \uBC0F List Example UI \uD15C\uD50C\uB9BF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "api-reference"
  }), `API \uCC38\uC870`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_scroll_wheel",
    mdxType: "Link"
  }, "ScrollWheel \uD074\uB798\uC2A4\uC5D0 \uB300\uD55C API \uCC38\uC870"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);