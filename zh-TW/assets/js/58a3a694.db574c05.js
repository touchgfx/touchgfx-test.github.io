"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8542],{

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

/***/ 4420:
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
  id: "03-display-internal",
  title: "3. \u986F\u793A\u5167\u90E8\u8A18\u61B6\u9AD4\u4E2D\u7684\u5F71\u50CF\u7DE9\u885D\u5340",
  sidebar_label: "3. \u986F\u793A\u5167\u90E8\u8A18\u61B6\u9AD4\u4E2D\u7684\u5F71\u50CF\u7DE9\u885D\u5340"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/03-display-internal",
  "id": "development/board-bring-up/how-to/03-display-internal",
  "title": "3. \u986F\u793A\u5167\u90E8\u8A18\u61B6\u9AD4\u4E2D\u7684\u5F71\u50CF\u7DE9\u885D\u5340",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/03-display-internal.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/03-display-internal",
  "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/03-display-internal",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "id": "03-display-internal",
    "title": "3. \u986F\u793A\u5167\u90E8\u8A18\u61B6\u9AD4\u4E2D\u7684\u5F71\u50CF\u7DE9\u885D\u5340",
    "sidebar_label": "3. \u986F\u793A\u5167\u90E8\u8A18\u61B6\u9AD4\u4E2D\u7684\u5F71\u50CF\u7DE9\u885D\u5340"
  },
  "sidebar": "docs",
  "previous": {
    "title": "2. CPU\u7684\u57F7\u884C",
    "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/02-cpu-running"
  },
  "next": {
    "title": "4. \u5916\u90E8RAM",
    "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/04-enable-external-ram"
  }
};
const assets = {};



const toc = [{
  value: "\u52D5\u6A5F",
  id: "motivation",
  level: 2
}, {
  value: "\u76EE\u6A19",
  id: "goal",
  level: 2
}, {
  value: "\u9A57\u8B49",
  id: "verification",
  level: 3
}, {
  value: "\u5148\u6C7A\u689D\u4EF6",
  id: "prerequisites",
  level: 2
}, {
  value: "\u57F7\u884C",
  id: "do",
  level: 2
}, {
  value: "\u4E26\u884CRGB\u986F\u793A\u5668",
  id: "parallel-rgb-displays",
  level: 3
}, {
  value: "\u986F\u793A\u76F8\u95DCGPIO",
  id: "display-gpio",
  level: 4
}, {
  value: "LTDC\u8A2D\u5B9A",
  id: "ltdc-configuration",
  level: 4
}, {
  value: "\u6642\u9418\u8A2D\u5B9A",
  id: "clock-configuration",
  level: 4
}, {
  value: "\u8A2D\u5B9A\u5F71\u50CF\u7DE9\u885D\u5340\u4F4D\u5740",
  id: "setting-the-framebuffer-address",
  level: 4
}, {
  value: "Enabling LTDC interrupt",
  id: "enabling-ltdc-interrupt",
  level: 4
}, {
  value: "\u6AA2\u67E5\u66F4\u65B0\u983B\u7387",
  id: "check-the-framerate",
  level: 4
}, {
  value: "SPI\u986F\u793A\u5668",
  id: "spi-display",
  level: 3
}, {
  value: "SPI \u8A2D\u5B9A",
  id: "spi-configuration",
  level: 4
}, {
  value: "\u6AA2\u67E5\u986F\u793A\u5668\u984F\u8272",
  id: "checking-the-display-colors",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "motivation"
  }), `\u52D5\u6A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u4E00\u6B65\u4E2D\uFF0C\u901A\u904E\u5C07\u50CF\u7D20\u6578\u64DA\u5F9E\u5167\u90E8RAM\u50B3\u8F38\u5230\u986F\u793A\u5668\uFF0C\u6211\u5011\u53EF\u4EE5\u770B\u5230\u986F\u793A\u5668\u4E0A\u6703\u986F\u793A\u5167\u5BB9\u3002 \u6B64\u6B65\u9A5F\u53EF\u78BA\u4FDD\u6211\u5011\u80FD\u5C07\u6578\u64DA\u50B3\u8F38\u5230\u986F\u793A\u5668\uFF0C\u4E26\u4E14\u53EF\u4EE5\u4E0D\u65B7\u66F4\u65B0\u986F\u793A\u5668\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u5C07\u5F71\u50CF\u8CC7\u6599\u50B3\u8F38\u5230\u986F\u793A\u5668\u4EE5\u5916\uFF0C\u6211\u5011\u9084\u5FC5\u9808\u78BA\u4FDD\u53EF\u9023\u7E8C\u5C07\u65B0\u6578\u64DA\u767C\u9001\u5230\u986F\u793A\u5668\uFF0C\u4E14\u4E0D\u6703\u5728\u986F\u793A\u5668\u4E0A\u51FA\u73FE\u932F\u8AA4\u3002 \u6211\u5011\u4E5F\u5C07\u6E2C\u91CF\u50B3\u9001\u901F\u7387\uFF0C\u56E0\u70BA\u9019\u6703\u5F71\u97FF\u986F\u793A\u5668\u7684\u66F4\u65B0\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B63\u5982\u6211\u5011\u5F9E\u4E0A\u4E00\u7BC0\u4E2D\u5B78\u5230\u7684\u90A3\u6A23\uFF0C\u6211\u5011\u5C07\u5728\u5167\u90E8RAM\u4E2D\u653E\u7F6E\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u800C\u8A72RAM\u53EF\u8B80\u5BEB\u3002 \u6211\u5011\u5C07\u91CD\u8907\u66F4\u65B0\u8A72\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u4E26\u5C07\u5176\u50B3\u8F38\u5230\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56DE\u9867\u4E00\u4E0B\uFF0C\u901A\u904E\u4EE5\u4E0B\u516C\u5F0F\u4F86\u8A08\u7B97`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/framebuffer"
  }), `\u5F71\u50CF\u7DE9\u885D\u5340`), `:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5BEC x \u9AD8 x bpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F8B\u5982\uFF0C\u89E3\u6790\u5EA6\u70BA480 x 272\u768416\u4F4D\u5143\u666E\u901A\u986F\u793A\u5668\u5C07\u4F54\u7528480x272x16/8\u4F4D\u5143\u7D44 \u5373261120\u4F4D\u5143\u7D44\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5373\u4F7F\u986F\u793A\u5668\u5C3A\u5BF8\u904E\u5927\u5C0E\u81F4\u6240\u9700\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u7121\u6CD5\u5B58\u5132\u5728\u5167\u90E8RAM\u4E2D\uFF0C\u4E5F\u4E0D\u61C9\u8DF3\u904E\u6B64\u6B65\u9A5F\u3002 \u800C\u61C9\u5C07\u986F\u793A\u63A7\u5236\u5668\u914D\u7F6E\u70BA\u50C5\u66F4\u65B0\u986F\u793A\u5668\u7684\u4E00\u90E8\u5206\u3002 \u9019\u6A23\u4E00\u4F86\uFF0C\u6211\u5011\u53EF\u4EE5\u8ABF\u6574\u5F71\u50CF\u7DE9\u885D\u5340\u6240\u9700\u7684RAM\uFF0C\u4E26\u914D\u7F6E\u5408\u9069\u7684\u5167\u90E8RAM\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u4ECB\u9762\u7684\u985E\u578B\u5C0D\u50B3\u8F38\u5F71\u50CF\u7DE9\u885D\u5340\u6240\u9700\u7684\u8A2D\u7F6E\u548C\u7A0B\u5F0F\u78BC\u6709\u5F88\u5927\u5F71\u97FF\u3002 \u5728\u672C\u7BC0\u4E2D\uFF0C\u6211\u5011\u5C07\u9996\u5148\u8A0E\u8AD6\u9023\u63A5\u81F3LTDC\u7684\u986F\u793A\u5668\u3002 \u5982\u679C\u60A8\u4F7F\u7528\u5982SPI\u986F\u793A\u5668\u4E4B\u985E\u7684\u986F\u793A\u5668\uFF0C\u7A0B\u5F0F\u78BC\u6703\u6709\u5F88\u5927\u5340\u5225\uFF0C\u4F46\u4EFB\u52D9\u548C\u76EE\u6A19\u7686\u76F8\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u7684\u76EE\u6A19\u662F\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5167\u5BB9\u50B3\u8F38\u5230\u986F\u793A\u5668\u3002 \u60A8\u4E5F\u61C9\u9A57\u8B49\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5167\u5BB9\u662F\u5426\u53EF\u4EE5\u4FEE\u6539\u4EE5\u53CA\u5F71\u50CF\u7DE9\u885D\u5340\u662F\u5426\u53EF\u4EE5\u9023\u7E8C\u91CD\u65B0\u767C\u9001\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\u9A57\u8B49`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u672C\u7BC0\u7684\u9A57\u8B49\u9EDE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9A57\u8B49\u9EDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u57FA\u672C\u539F\u7406`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793A\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793A\u63A7\u5236\u5668\u6216SPI\u5DF2\u8A2D\u5B9A\u4E26\u57F7\u884C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u986F\u793A\u5DF2\u66F4\u65B0\u7684\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6211\u5011\u77E5\u9053\u5982\u4F55\u91CD\u8907\u50B3\u9001\u5F71\u50CF\u7DE9\u885D\u5340`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u984F\u8272\u6B63\u78BA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC\u76F8\u95DC\u7684GPIO\u8A2D\u5B9A\u6B63\u78BA\u6216\u986F\u793A\u5668\u7684\u8CC7\u6599\u683C\u5F0F\u8207\u6211\u5011\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u5339\u914D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u66F4\u65B0\u983B\u7387\u6B63\u78BA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8A2D\u5B9A\u66F4\u65B0\u983B\u7387\u8207\u524D\u5F8C\u5ECA\u7B49\u986F\u793A\u53C3\u6578\uFF0C\u4EE5\u53D6\u5F97\u6240\u9700\u66F4\u65B0\u983B\u7387`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u5148\u6C7A\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u6B64\u6B65\u9A5F\u7684\u5148\u6C7A\u689D\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u95DC\u986F\u793A\u5668\u7684\u8CC7\u8A0A\uFF0C\u901A\u5E38\u70BA\u8CC7\u6599\u624B\u518A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u95DCMCU\u548C\u986F\u793A\u5668\u4E4B\u9593\u7684\u9023\u63A5\u7684\u8CC7\u8A0A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u57F7\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u64DA\u986F\u793A\u5668\u985E\u578B\uFF0C\u6240\u9700\u8A2D\u7F6E\u6703\u6709\u6240\u4E0D\u540C\u3002 \u4F46\u5C0D\u65BC\u6240\u6709\u985E\u578B\u7684\u986F\u793A\u5668\uFF0C\u6211\u5011\u90FD\u9700\u8981\u5167\u90E8RAM\u4E2D\u6709\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u4E00\u7A2E\u7C21\u55AE\u7684\u914D\u7F6E\u8A18\u61B6\u9AD4\u7684\u65B9\u6CD5\u662F\u53EA\u9700\u5BA3\u544A\u4E00\u500B\u5927\u5C0F\u5408\u9069\u7684\u5168\u57DF\u9663\u5217\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* USER CODE BEGIN PV */
uint16_t framebuffer[480*272];  //16 bpp framebuffer
/* USER CODE END PV */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5167\u90E8RAM\u4E0D\u8DB3\u4EE5\u5BB9\u7D0D\u8A72\u9663\u5217\uFF0C\u8ACB\u5BA3\u544A\u4E00\u500B\u5C0D\u61C9\u65BC\u8F03\u5C0F\u89E3\u6790\u5EA6\u7684\u9663\u5217\uFF0C\u6BD4\u65B9480x200\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u5230\u986F\u793A\u5668\u7684\u65B9\u6CD5\u53D6\u6C7A\u65BC\u986F\u793A\u5668\u985E\u578B\u3002 \u6211\u5011\u73FE\u5728\u4F86\u77AD\u89E3\u4E00\u4E0B\u9019\u9EDE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "parallel-rgb-displays"
  }), `\u4E26\u884CRGB\u986F\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u9996\u5148\u5C07\u8A0E\u8AD6\u9023\u63A5\u81F3MCU LTDC\u63A7\u5236\u5668\u7684\u4E26\u884CRGB\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8996\u7A97\u7684\u8A2D\u5B9A\u4EFB\u52D9\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A2D\u5B9A\u8207\u986F\u793A\u5668\u6709\u95DC\u7684GPIO\u9023\u7DDA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A2D\u5B9ALTDC\u63A7\u5236\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A2D\u5B9ALTDC\u50CF\u7D20\u6642\u8108`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A2D\u7F6E\u5F71\u50CF\u7DE9\u885D\u5340\u4F4D\u5740`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6AA2\u67E5\u66F4\u65B0\u983B\u7387`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F5C\u70BA\u7BC4\u4F8B\uFF0C\u6211\u5011\u5C07\u4F7F\u7528STM32F746Discovery evaluation\u5957\u4EF6\u3002 \u6B64\u677F\u5E36\u6709480*272\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "display-gpio"
  }), `\u986F\u793A\u76F8\u95DCGPIO`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u986F\u793A\u5668\u4EE524 BPP\u6A21\u5F0F\u57F7\u884C\uFF0C\u6240\u4EE5\u6211\u5011\u70BALTDC\u548C\u986F\u793A\u5668\u4E4B\u9593\u7684\u9023\u7DDA\u8A2D\u5B9A24\u500BGPIO\u3002 \u9019\u5728Multimedia -> LTDC-> GPIO\u8A2D\u5B9A\u4E0B\u7684STM32CubeMX\u4E2D\u6700\u5BB9\u6613\u5BE6\u73FE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u8A2D\u5B9A\u986F\u793A\u76F8\u95DC\u7684GPIO"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u7528\u65BC\u50CF\u7D20\u50B3\u8F38\u768424\u500BGPIO\uFF08\u5982LTDC_B0\uFF09\u4EE5\u5916\uFF0C\u6211\u5011\u9084\u8A2D\u5B9A\u4E864\u500B\u986F\u793A\u63A7\u5236\u8A0A\u865F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4FE1\u865F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u529F\u80FD`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_CLK`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u50CF\u7D20\u6642\u8108 \u7576\u5C0D24\u500B\u7DDA\u4E2D\u7684\u50CF\u7D20\u9032\u884C\u53D6\u6A23\u6642\uFF0C\u5411\u986F\u793A\u5668\u767C\u51FA\u4FE1\u865F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_DE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8CC7\u6599\u555F\u52D5\u3002 \u50CF\u7D20\u65BC\u555F\u52D5\u6642\u50B3\u8F38`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_HSYNC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6C34\u5E73\u540C\u6B65\u3002 \u5141\u8A31\u986F\u793A\u5668\u627E\u5230\u50CF\u7D20\u884C\u7684\u8D77\u9EDE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_VSYNC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5782\u76F4\u540C\u6B65\u3002 \u5141\u8A31\u986F\u793A\u5668\u627E\u5230\u5E40\u7684\u8D77\u59CB\u9EDE`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6AA2\u67E5\u60A8\u7684\u786C\u9AD4\u8A2D\u8A08\u4E26\u9032\u884C\u76F8\u61C9\u7684\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "ltdc-configuration"
  }), `LTDC\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u8A2D\u5B9A\u4F4D\u65BC \u591A\u5A92\u9AD4 -> LTDC -> \u53C3\u6578\u8A2D\u5B9A \u4E0B\u7684STM32CubeMX\u4E2D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u8A2D\u5B9ALTDC\u53C3\u6578"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u5668\u7684\u6709\u6548\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u8207\u89E3\u6790\u5EA6\u5C0D\u61C9\u3002 \u6709\u95DC\u540C\u6B65\u8108\u885D\u5BEC\u5EA6\u548C\u524D\u5F8C\u5ECA\uFF0C\u8ACB\u6AA2\u67E5\u986F\u793A\u8CC7\u6599\u624B\u518A\u3002 \u540C\u6642\u9700\u6CE8\u610F\u8A0A\u865F\u6975\u6027\u3002 \u7070\u8272\u7684\u503C\u6839\u64DA\u5176\u4ED6\u503C\u8A08\u7B97\u800C\u4F86\u3002 \u9019\u4E9B\u503C\u88AB\u5BEB\u5165LTDC\u66AB\u5B58\u5668\uFF08\u4E5F\u53EF\u5728\u7A0B\u5F0F\u78BC\u4E2D\u627E\u5230\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u8ACB\u5230 \u591A\u5A92\u9AD4-> LTDC -> \u5C64\u8A2D\u5B9A \u7684LTDC\u5C64\u8A2D\u5B9A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u8A2D\u5B9ALTDC\u5C64\u53C3\u6578"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u8A72\u6E2C\u8A66\u4EE5\u53CA\u5728TouchGFX\u4E2D\uFF0C\u6211\u5011\u901A\u5E38\u50C5\u4F7F\u7528\u4E00\u5C64\u3002 \u7B2C0\u5C64\u7684\u89E3\u6790\u5EA6\u61C9\u8207\u5F71\u50CF\u7DE9\u885D\u5340\u5927\u5C0F\u5339\u914D\u3002 \u4E4B\u5F8C\u6703\u8A2D\u7F6E\u5F71\u50CF\u7DE9\u885D\u5340\u4F4D\u5740\uFF0C\u5728\u9019\u88E1\u66AB\u6642\u5148\u8DF3\u904E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u5BA3\u544A\u4E86\u5C0F\u65BC\u986F\u793A\u5668\u89E3\u6790\u5EA6\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u9663\u5217\uFF0C\u5247\u8ABF\u6574\u5716\u5C64\u5927\u5C0F\uFF0C\u4EE5\u4FBF\u8207\u5F71\u50CF\u7DE9\u885D\u5340\u5C3A\u5BF8\u5339\u914D\u3002 LTDC\u5C07\u50B3\u8F38\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\u6C92\u6709\u7684\u986F\u793A\u5668\u50CF\u7D20\u80CC\u666F\u984F\u8272\u3002 \u5EFA\u8B70\u5C07\u80CC\u666F\u984F\u8272\u8A2D\u5B9A\u70BA\u8F03\u986F\u773C\u7684\u984F\u8272\uFF0C\u5982\u7D05\u8272\uFF08\u85CD\u8272\uFF1A0x00\uFF0C\u7DA0\u8272\uFF1A0x00\uFF0C\u7D05\u8272\uFF1A0xFF\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "clock-configuration"
  }), `\u6642\u9418\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6642\u9418\u8A2D\u5B9A\u4E5F\u5F88\u91CD\u8981\u3002 \u5FC5\u9808\u555F\u52D5\u6240\u6709GPIO\u548CLTDC\u7684\u6642\u9418\u3002 \u50CF\u7D20\u6642\u8108\u5FC5\u9808\u5728\u986F\u793A\u5668\u53EF\u63A5\u53D7\u7684\u7BC4\u570D\u5167\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-04.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u6642\u9418\u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u53D6\u6C7A\u65BC3\u500B\u6642\u9418\uFF1AHCLK\uFF0CPCLK2\u8207LCD_CLK\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "setting-the-framebuffer-address"
  }), `\u8A2D\u5B9A\u5F71\u50CF\u7DE9\u885D\u5340\u4F4D\u5740`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32CubeMX\u4E2D\uFF0C\u6211\u5011\u5C07\u7B2C0\u5C64\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u4F4D\u5740\u8A2D\u5B9A\u70BA0xC0000000\u3002 \u6211\u5011\u9700\u8981\u5C07\u5176\u66F4\u6539\u70BA\u5167\u90E8RAM\u4E2D\u7684\u9663\u5217\u4F4D\u5740\u3002 \u5728\u9019\u4F7F\u7528STM32Cube\u97CC\u9AD4HAL\u51FD\u6578\u53EF\u4EE5\u8F15\u9B06\u5BE6\u73FE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `  /* USER CODE BEGIN 2 */
  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);
  /* USER CODE END 2 */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `HAL\u51FD\u6578\u4E2D\u7684\u5C64\u6578\u7DE8\u865F\u70BA1\u30012\uFF0C\u800CSTM32CubeMX\u4E2D\u7684\u5C64\u6578\u7DE8\u865F\u70BA0\u30011\u3002 \u53E6\u5916\uFF0CLTDC\u5B8C\u5168\u7531STM32CubeMX\u7522\u751F\u7A0B\u5F0F\u78BC\u4E2D\u7684 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `MX_LTDC_Init(void)`), ` \u51FD\u6578\u4F86\u8A2D\u5B9A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u63A7\u5236\u5668\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u91CD\u8907\u767C\u9001\u81F3\u986F\u793A\u5668\u3002 \u986F\u793A\u7684\u5716\u50CF\u53D6\u6C7A\u65BC\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\u7684\u503C\u3002 \u5617\u8A66\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u4E0D\u540C\u503C\u6216\u6A21\u5F0F\u3002 \u4F8B\u5982\uFF0C\u4F7F\u7528memset\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u6E05\u9664\u70BA0xFF\uFF0C\u4EE5\u986F\u793A\u5168\u767D\u7684\u87A2\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5728\u67D0\u4E9B\u986F\u793A\u5668\u4E0A\uFF0C\u5FC5\u9808\u958B\u555F\u80CC\u5149\u624D\u80FD\u4F7F\u5716\u5F62\u5E40\u53EF\u898B\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "enabling-ltdc-interrupt"
  }), `Enabling LTDC interrupt`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The LTDC controller raises an interrupt for each frame, this interrupt must be enabled in the NVIC (core interrupt controller) to be able to handle the interrupt in your application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-ltdc-interrupt-config.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "LTDC interrupt configuration"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In the interrupt handler you must reenable the interrupt after each time it fires.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32f7xx_it.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{7}",
    "{7}": true
  }), `void LTDC_IRQHandler(void)
{
  /* USER CODE BEGIN LTDC_IRQn 0 */
  /* USER CODE END LTDC_IRQn 0 */
  HAL_LTDC_IRQHandler(&hltdc);
  /* USER CODE BEGIN LTDC_IRQn 1 */
  HAL_LTDC_ProgramLineEvent(&hltdc,0);
  /* USER CODE END LTDC_IRQn 1 */
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "check-the-framerate"
  }), `\u6AA2\u67E5\u66F4\u65B0\u983B\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The LTDC interrupt will be used to drive the application forward. \u60A8\u61C9\u4F7F\u7528\u9664\u932F\u5668\u4F86\u6AA2\u67E5\u8A72\u4E2D\u65B7\u662F\u5426\u88AB\u89F8\u767C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u4E9B\u4E2D\u65B7\u9593\u7684\u6642\u9593\u662F\u6240\u6709\u5716\u5143\u50B3\u8F38\u548C\u524D\u5F8C\u5ECA\u7684\u8017\u6642\u7E3D\u548C\u3002 \u60A8\u53EF\u4EE5\u901A\u904E\u8ABF\u7BC0\u524D\u5F8C\u5ECA\u4F86\u8ABF\u7BC0\u66F4\u65B0\u983B\u7387\u3002 \u524D\u5F8C\u5ECA\u53C3\u6578\u662FLTDC\u914D\u7F6E\u7684\u4E00\u90E8\u5206\u3002 \u901A\u5E38\u901A\u904E\u589E\u5F37\u524D\u5ECA\u4F86\u964D\u4F4E\u66F4\u65B0\u983B\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6E2C\u91CF\u66F4\u65B0\u983B\u7387\u7684\u7C21\u55AE\u65B9\u6CD5\u70BA\u4F7F\u7528\u4E2D\u65B7\u8655\u7406\u7A0B\u5F0F\u4E2D\u7684HAL_GetTick\uFF08\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32f7xx_it.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{6-8}",
    "{6-8}": true
  }), `volatile int last = 0;
volatile int diff = 0;
void LTDC_IRQHandler(void)
{
  /* USER CODE BEGIN LTDC_IRQn 0 */
  int now = HAL_GetTick();
  diff = now - last;
  last = now;
  /* USER CODE END LTDC_IRQn 0 */
  HAL_LTDC_IRQHandler(&hltdc);
  ...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u8A18\u4F4F\uFF0C\u5728\u6BCF\u79D260\u5E40\u7684\u60C5\u6CC1\u4E0B\uFF0C\u5404\u500B\u5E40\u4E4B\u9593\u61C9\u8A72\u67091000 ms / 60 = 16 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "spi-display"
  }), `SPI\u986F\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u6211\u5011\u5C07\u8A0E\u8AD6\u8207SPI\u532F\u6D41\u9023\u63A5\u7684\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8996\u7A97\u7684\u8A2D\u5B9A\u4EFB\u52D9\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A2D\u5B9ASPI\u5916\u8A2D\u8207GPIO`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6AA2\u67E5\u6642\u9418`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7DE8\u5BEB\u6216\u627E\u5230\u5FC5\u8981\u7684\u9A45\u52D5\u7A0B\u5F0F\u7A0B\u5F0F\u78BC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "spi-configuration"
  }), `SPI \u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32CubeMX\u4E2D\u555F\u52D5\u4E26\u555F\u52D5SPI\u3002 \u9019\u4E9B\u5F71\u50CF\u4F86\u81EASTM32G081\u5C08\u6848\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-05.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI \u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6AA2\u67E5\u4F7F\u7528\u7684SPI\u683C\u5F0F\u7684\u986F\u793A\u5668\u8CC7\u6599\u624B\u518A\uFF08\u8CC7\u6599\u5927\u5C0F\u548C\u4F4D\u9806\u5E8F\uFF09\u3002 \u8ACB\u8A18\u4F4F\uFF0C16\u4F4D\u5143\u5B57\u4EE5\u5C0F\u7AEF\u4F4D\u5143\u7D44\u5E8F\u5B58\u5132\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\u3002 \u6AA2\u67E5\u662F\u5426\u53EF\u4EE5\u5C07\u986F\u793A\u5668\u914D\u7F6E\u70BA\u6B64\u683C\u5F0F\u3002 If not, then you have to convert data during transmission. Also pay attention to the clock polarity and clock phase. \u9019\u4E9B\u53C3\u6578\u5DF2\u5728\u986F\u793A\u5668\u6578\u64DA\u624B\u518A\u4E2D\u6307\u5B9A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SPI\u6642\u9418\uFF08\u6CE2\u7279\u7387\uFF09\u7531FCLK\u7684\u9664\u983B\u5668\u63A7\u5236\u3002 \u6700\u5C0F\u9664\u983B\u5668\u70BA2\u3002 \u5982\u679CMCU\u6B63\u5728\u57F7\u884C \uFF08\u598264MHz\uFF09\uFF0C\u5247\u6700\u5927SPI\u6CE2\u7279\u7387\u70BA32 MBit/s\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728GPIO\u9078\u9805\u4E0A\uFF0C\u60A8\u53EF\u4EE5\u6AA2\u67E5SPI\u5916\u8A2D\u7684GPIO\u8A2D\u5B9A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-06.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI GPIO\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u53F3\u65B9\u7684\u5F15\u8173\u6392\u5217\u6AA2\u8996\u4E2D\u9078\u64C7GPIO\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-07.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI GPIO\u9078\u64C7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u5269\u4E0B\u7684\u4EFB\u52D9\u70BA\u914D\u7F6E\u986F\u793A\u5668\u4E26\u5728SPI\u901A\u9053\u4E0A\u50B3\u8F38\u5F71\u50CF\u7DE9\u885D\u5340\u3002 STM32CubeMX cannot generate this code for you, as it depends heavily on the display. For many displays it is necessary to send a sequence of commands and follow a specific power up sequence. \u4E4B\u5F8C\uFF0C\u901A\u5E38\u9700\u8981\u8A2D\u7F6E\u984F\u8272\u6A21\u5F0F\uFF0C\u7136\u5F8C\u5C07\u986F\u793A\u5668\u6253\u958B\u3002 \u6240\u6709\u9019\u4E9B\u9808\u5728\u4F9B\u61C9\u5546\u6240\u63D0\u4F9B\u7684\u6578\u64DA\u624B\u518A\u6216\u7BC4\u4F8B\u4E2D\u6307\u5B9A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32Cube\u97CC\u9AD4\u4E2D\u5305\u542B SPI\u901A\u8A0A\u7684\u7BC4\u4F8B\u3002 STM32Cube HAL\u5305\u542B\u5404\u7A2E\u8F14\u52A9\u529F\u80FD\u3002 \u50B3\u9001\u8CC7\u6599\u7684\u57FA\u672C\u51FD\u6578\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32g0xx_hal_spi.h"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `HAL_StatusTypeDef HAL_SPI_Transmit(SPI_HandleTypeDef *hspi, uint8_t *pData, uint16_t Size, uint32_t Timeout);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u5EFA\u8B70\u4F7F\u7528\u9019\u4E9B\u51FD\u6578\uFF0C\u76F4\u5230\u80FD\u7A69\u5B9A\u9032\u884C\u901A\u8A0A\u3002 \u7136\u5F8C\uFF0C\u53EF\u901A\u904E\u7DE8\u5BEB\u5C08\u7528\u51FD\u6578\u4F86\u63D0\u9AD8\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7DE8\u5BEBSPI\u986F\u793A\u9A45\u52D5\u7A0B\u5F0F\u7684\u904E\u7A0B\u4E2D\uFF0C\u4F7F\u7528SPI\u793A\u6CE2\u5668\u6216SPI USB\u8A18\u9304\u5668\u6703\u975E\u5E38\u6709\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "SPI\u5F9E\u4F4E\u983B\u555F\u52D5\uFF0C\u4EE5\u907F\u514D\u96DC\u8A0A\u554F\u984C\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "checking-the-display-colors"
  }), `\u6AA2\u67E5\u986F\u793A\u5668\u984F\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `At this point where you can transmit a framebuffer to the display, it is advisable to thoroughly check the display colors.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u60F3\u6CD5\u5C31\u662F\u5C07\u984F\u8272\u5BEB\u5165\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u4E26\u901A\u904E\u8996\u89BA\u4F86\u6AA2\u67E5\u986F\u793A\u5668\u3002 \u4EE5\u4E0B\u70BA\u4E00\u4E9B\u7BC4\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6E2C\u8A66`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8AAA\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7D05\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\u8A2D\u7F6E\u7D05\u8272\u3002 \u986F\u793A\u5668\u4E5F\u5FC5\u9808\u70BA\u7D05\u8272\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7DA0\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\u8A2D\u7F6E\u7DA0\u8272\u3002 \u986F\u793A\u5668\u4E5F\u5FC5\u9808\u70BA\u7DA0\u8272\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u85CD\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\u8A2D\u7F6E\u85CD\u8272\u3002 \u986F\u793A\u5668\u4E5F\u5FC5\u9808\u70BA\u85CD\u8272\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6DF1\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5982\u679C\u8A2D\u7F6E\u70BA\u6DF1\u8272\uFF08\u59820x8000\uFF09\uFF0850%\u7D05\u8272\uFF09\uFF0C\u5247\u5FC5\u9808\u5728\u986F\u793A\u5668\u4E0A\u986F\u793A\u9ED1\u8272\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u66F4\u6539\u984F\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6BCF\u79D2\u66F4\u6539\u4E00\u6B21\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u7136\u5F8C\u67E5\u770B\u986F\u793A\u5668\u662F\u5426\u66F4\u65B0\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u5C07\u984F\u8272\u653E\u5165RGB565\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\uFF0C\u53EF\u4F7F\u7528\u4EE5\u4E0B\u65B9\u6848\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t r    = 0xff, g = 0x00, b = 0x00;             // Solid red
uint16_t col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565
// Put colors into the framebuffer
for(int i = 0; i < W*H; i++)
{
  framebuffer[i] = col;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC24BPP\u986F\u793A\u5668\uFF0C\u6700\u597D\u4F7F\u7528\u4F4D\u5143\u7D44\u6307\u6A19\u4F86\u8868\u793A\u7A0B\u5F0F\u78BC\uFF08\u984F\u8272\u4EE5BGR\u9806\u5E8F\u5132\u5B58\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t* framebuffer[480*272*3];  //24 bit framebuffer
...
uint8_t *fb = framebuffer;
while(fb < (uint8_t*)(framebuffer + (480*272*3)))
{
  *fb++ = 0x00; // Write blue color and increment pointer by one byte
  *fb++ = 0x00; // Write green color
  *fb++ = 0xFF; // Write red color
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/red-display-test.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u986F\u793A\u5F69\u8272\u756B\u9762\u7684\u5F71\u50CF\u7DE9\u885D\u5340"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Changing the framebuffer every second by using the LTDC line event callback:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* USER CODE BEGIN 4 */
uint8_t r = 0x00, g = 0x00, b = 0x00;
uint16_t col = 0;
uint8_t color = 1;
void HAL_LTDC_LineEventCallback(LTDC_HandleTypeDef* hltdc)
{
  static int count = 0;
  count++;
  if (count >= 60)
  {
    count = 0;
      switch (color)
      {
      case 1:
        r = 0xFF; g = 0x00; b = 0x00;
        color = 2;
        break;
      case 2:
        r = 0x00; g = 0xFF; b = 0x00;
        color = 3;
        break;
      case 3:
        r = 0x00; g = 0x00; b = 0xFF;
        color = 1;
        break;
      default:
        break;
    }
    col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565
    // Put colors into the framebuffer
    for(int i = 0; i < W*H; i++)
    {
      framebuffer[i] = col;
    }
  }
}
/* USER CODE END 4 */
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);