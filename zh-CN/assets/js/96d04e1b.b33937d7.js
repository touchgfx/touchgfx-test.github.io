"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8513],{

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

/***/ 15055:
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
  title: "3. \u663E\u793A\u5668\u7684\u5E27\u7F13\u5B58\u4F4D\u4E8E\u5185\u90E8RAM\u4E2D",
  sidebar_label: "3. \u663E\u793A\u5668\u7684\u5E27\u7F13\u5B58\u4F4D\u4E8E\u5185\u90E8RAM\u4E2D"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/03-display-internal",
  "id": "development/board-bring-up/how-to/03-display-internal",
  "title": "3. \u663E\u793A\u5668\u7684\u5E27\u7F13\u5B58\u4F4D\u4E8E\u5185\u90E8RAM\u4E2D",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/03-display-internal.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/03-display-internal",
  "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/03-display-internal",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "id": "03-display-internal",
    "title": "3. \u663E\u793A\u5668\u7684\u5E27\u7F13\u5B58\u4F4D\u4E8E\u5185\u90E8RAM\u4E2D",
    "sidebar_label": "3. \u663E\u793A\u5668\u7684\u5E27\u7F13\u5B58\u4F4D\u4E8E\u5185\u90E8RAM\u4E2D"
  },
  "sidebar": "docs",
  "previous": {
    "title": "2. CPU\u8FD0\u884C",
    "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/02-cpu-running"
  },
  "next": {
    "title": "4. \u5916\u90E8RAM",
    "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/04-enable-external-ram"
  }
};
const assets = {};



const toc = [{
  value: "\u52A8\u673A",
  id: "motivation",
  level: 2
}, {
  value: "\u76EE\u6807",
  id: "goal",
  level: 2
}, {
  value: "\u9A8C\u8BC1",
  id: "verification",
  level: 3
}, {
  value: "\u5148\u51B3\u6761\u4EF6",
  id: "prerequisites",
  level: 2
}, {
  value: "\u6267\u884C",
  id: "do",
  level: 2
}, {
  value: "\u5E76\u884CRGB\u663E\u793A\u5668",
  id: "parallel-rgb-displays",
  level: 3
}, {
  value: "\u663E\u793A\u76F8\u5173GPIO",
  id: "display-gpio",
  level: 4
}, {
  value: "LTDC \u914D\u7F6E",
  id: "ltdc-configuration",
  level: 4
}, {
  value: "\u65F6\u949F\u914D\u7F6E",
  id: "clock-configuration",
  level: 4
}, {
  value: "\u8BBE\u7F6E\u5E27\u7F13\u51B2\u5730\u5740",
  id: "setting-the-framebuffer-address",
  level: 4
}, {
  value: "Enabling LTDC interrupt",
  id: "enabling-ltdc-interrupt",
  level: 4
}, {
  value: "\u68C0\u67E5\u5E27\u7387",
  id: "check-the-framerate",
  level: 4
}, {
  value: "SPI \u663E\u793A\u5668",
  id: "spi-display",
  level: 3
}, {
  value: "SPI \u914D\u7F6E",
  id: "spi-configuration",
  level: 4
}, {
  value: "\u68C0\u67E5\u663E\u793A\u5668\u989C\u8272",
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
  }), `\u52A8\u673A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD9\u4E00\u6B65\u4E2D\uFF0C\u901A\u8FC7\u5C06\u50CF\u7D20\u6570\u636E\u4ECE\u5185\u90E8RAM\u4F20\u8F93\u5230\u663E\u793A\u5668\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u663E\u793A\u5668\u4E0A\u4F1A\u663E\u793A\u5185\u5BB9\u3002 \u6B64\u6B65\u9AA4\u53EF\u786E\u4FDD\u6211\u4EEC\u80FD\u5C06\u6570\u636E\u4F20\u8F93\u5230\u663E\u793A\u5668\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4E0D\u65AD\u66F4\u65B0\u663E\u793A\u5668\u5185\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u5C06\u56FE\u50CF\u6570\u636E\u4F20\u8F93\u5230\u663E\u793A\u5668\u4EE5\u5916\uFF0C\u6211\u4EEC\u8FD8\u5FC5\u987B\u786E\u4FDD\u53EF\u8FDE\u7EED\u5C06\u65B0\u6570\u636E\u53D1\u9001\u5230\u663E\u793A\u5668\uFF0C\u4E14\u4E0D\u4F1A\u5728\u663E\u793A\u5668\u4E0A\u51FA\u73B0\u9519\u8BEF\u3002 \u6211\u4EEC\u8FD8\u5C06\u6D4B\u91CF\u4F20\u8F93\u901F\u5EA6\uFF0C\u56E0\u4E3A\u8FD9\u4F1A\u5F71\u54CD\u663E\u793A\u5668\u7684\u5E27\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B63\u5982\u6211\u4EEC\u4ECE\u4E0A\u4E00\u8282\u4E2D\u5B66\u5230\u7684\u90A3\u6837\uFF0C\u6211\u4EEC\u5C06\u5728\u5185\u90E8RAM\u4E2D\u653E\u7F6E\u4E00\u4E2A\u5E27\u7F13\u51B2\uFF0C\u8BE5RAM\u53EF\u8BFB\u5199\u3002 \u6211\u4EEC\u5C06\u91CD\u590D\u66F4\u65B0\u8BE5\u5E27\u7F13\u51B2\uFF0C\u5E76\u5C06\u5176\u4F20\u8F93\u5230\u663E\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56DE\u987E\u6B64 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/framebuffer"
  }), `\u5E27\u7F13\u51B2`), ` \u662F\u7531\u6B64 \u516C\u5F0F\u8BA1\u7B97\u7684\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5BBD x \u9AD8 x bpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F8B\u5982\uFF0C\u5206\u8FA8\u7387\u4E3A480 x 272\u768416\u4F4D\u666E\u901A\u663E\u793A\u5668\u5C06\u5360\u7528480x272x16/8\u5B57\u8282 \u537361120\u5B57\u8282\u7684\u7F13\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5373\u4F7F\u663E\u793A\u5668\u5C3A\u5BF8\u8FC7\u5927\u5BFC\u81F4\u6240\u9700\u6574\u5E27\u7F13\u5B58\u65E0\u6CD5\u5B58\u50A8\u5728\u5185\u90E8RAM\u4E2D\uFF0C\u4E5F\u4E0D\u5E94\u8DF3\u8FC7\u6B64\u6B65\u9AA4\u3002 \u800C\u5E94\u5C06\u663E\u793A\u63A7\u5236\u5668\u914D\u7F6E\u4E3A\u4EC5\u66F4\u65B0\u663E\u793A\u5668\u7684\u4E00\u90E8\u5206\u3002 \u8FD9\u6837\u4E00\u6765\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8C03\u6574\u5E27\u7F13\u51B2\u6240\u9700\u7684RAM\u91CF\uFF0C\u5E76\u4F7F\u5176\u9002\u5408\u5185\u90E8RAM\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u663E\u793A\u63A5\u53E3\u7684\u7C7B\u578B\u5BF9\u4F20\u8F93\u5E27\u7F13\u51B2\u6240\u9700\u7684\u8BBE\u7F6E\u548C\u4EE3\u7801\u6709\u5F88\u5927\u5F71\u54CD\u3002 \u5728\u672C\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u9996\u5148\u8BA8\u8BBA\u8FDE\u63A5\u81F3LTDC\u7684\u663E\u793A\u5668\u3002 \u5982\u679C\u60A8\u4F7F\u7528\u8BF8\u5982SPI\u663E\u793A\u5668\u4E4B\u7C7B\u7684\u663E\u793A\u5668\uFF0C\u4EE3\u7801\u4F1A\u6709\u5F88\u5927\u533A\u522B\uFF0C\u4F46\u4EFB\u52A1\u548C\u76EE\u6807\u76F8\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6807`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u7684\u76EE\u6807\u662F\u5C06\u5E27\u7F13\u51B2\u5185\u5BB9\u4F20\u8F93\u5230\u663E\u793A\u5668\u3002 \u60A8\u8FD8\u5E94\u9A8C\u8BC1\u662F\u5426\u53EF\u4EE5\u4FEE\u6539\u5E27\u7F13\u51B2\u5668\u5185\u5BB9\u548C\u8FDE\u7EED\u91CD\u65B0\u53D1\u9001\u5E27\u7F13\u51B2\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\u9A8C\u8BC1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u672C\u8282\u7684\u9A8C\u8BC1\u70B9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9A8C\u8BC1\u70B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `\u663E\u793A\u5E27\u7F13\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u663E\u793A\u63A7\u5236\u5668\u6216SPI\u5DF2\u914D\u7F6E\u5E76\u6B63\u5728\u8FD0\u884C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u663E\u793A\u66F4\u65B0\u7684\u5E27\u7F13\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6211\u4EEC\u77E5\u9053\u5982\u4F55\u91CD\u590D\u53D1\u9001\u5E27\u7F13\u5B58\u6570\u636E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u989C\u8272\u6B63\u786E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC\u76F8\u5173\u7684GPIO\u914D\u7F6E\u6B63\u786E\uFF0C\u663E\u793A\u5668\u7684\u6570\u636E\u683C\u5F0F\u4E0E\u6211\u4EEC\u7684\u5E27\u7F13\u5B58\u5339\u914D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5E27\u7387\u6B63\u786E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u914D\u7F6E\u50CF\u7D20\u65F6\u949F\u548C\u540C\u6B65\u6CBF\uFF0C\u4EE5\u83B7\u5F97\u6240\u9700\u5E27\u7387`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u5148\u51B3\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u6B64\u6B65\u9AA4\u7684\u5148\u51B3\u6761\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u5173\u663E\u793A\u5668\u7684\u4FE1\u606F\uFF0C\u901A\u5E38\u4E3A\u6570\u636E\u624B\u518C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u5173MCU\u548C\u663E\u793A\u5668\u4E4B\u95F4\u7684\u8FDE\u63A5\u7684\u4FE1\u606F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u6267\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u636E\u663E\u793A\u5668\u7C7B\u578B\uFF0C\u6240\u9700\u8BBE\u7F6E\u4F1A\u6709\u6240\u4E0D\u540C\u3002 \u4F46\u5BF9\u4E8E\u6240\u6709\u7C7B\u578B\u7684\u663E\u793A\u5668\uFF0C\u6211\u4EEC\u90FD\u9700\u8981\u5185\u90E8RAM\u4E2D\u6709\u4E00\u4E2A\u5E27\u7F13\u51B2\u3002 \u4E00\u79CD\u5206\u914D\u8BE5\u5B58\u50A8\u5668\u7684\u7B80\u5355\u65B9\u6CD5\u662F\u53EA\u58F0\u660E\u4E00\u4E2A\u5927\u5C0F\u5408\u9002\u7684\u5168\u5C40\u6570\u7EC4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* USER CODE BEGIN PV */
uint16_t framebuffer[480*272];  //16 bpp framebuffer
/* USER CODE END PV */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5185\u90E8RAM\u4E0D\u8DB3\u4EE5\u5BB9\u7EB3\u8BE5\u6570\u7EC4\uFF0C\u8BF7\u58F0\u660E\u4E00\u4E2A\u5BF9\u5E94\u4E8E\u8F83\u5C0F\u5206\u8FA8\u7387\u7684\u6570\u7EC4\uFF0C\u6BD4\u65B9480x200\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C06\u5E27\u7F13\u51B2\u4F20\u8F93\u5230\u663E\u793A\u5668\u7684\u65B9\u6CD5\u53D6\u51B3\u4E8E\u663E\u793A\u5668\u7C7B\u578B\u3002 \u6211\u4EEC\u73B0\u5728\u6765\u4E86\u89E3\u4E00\u4E0B\u8FD9\u70B9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "parallel-rgb-displays"
  }), `\u5E76\u884CRGB\u663E\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u9996\u5148\u5C06\u8BA8\u8BBA\u8FDE\u63A5\u81F3MCU\u7684LTDC\u63A7\u5236\u5668\u7684\u5E76\u884CRGB\u663E\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u7C7B\u663E\u793A\u5668\u7684\u914D\u7F6E\u4EFB\u52A1\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u914D\u7F6E\u4E0E\u663E\u793A\u5668\u6709\u5173\u7684GPIO\u8FDE\u63A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u914D\u7F6ELTDC\u63A7\u5236\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u914D\u7F6ELTDC\u50CF\u7D20\u65F6\u949F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8BBE\u7F6E\u5E27\u7F13\u51B2\u5730\u5740`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u68C0\u67E5\u5E27\u7387`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F5C\u4E3A\u8BF4\u660E\u6027\u793A\u4F8B\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528STM32F746Discovery\u8BC4\u4F30\u5957\u4EF6\u3002 \u6B64\u677F\u81EA\u5E26480*272\u663E\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "display-gpio"
  }), `\u663E\u793A\u76F8\u5173GPIO`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u663E\u793A\u5668\u4EE524 BPP\u6A21\u5F0F\u8FD0\u884C\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E3ALTDC\u548C\u663E\u793A\u5668\u4E4B\u95F4\u7684\u8FDE\u63A5\u914D\u7F6E24\u4E2AGPIO\u3002 \u8FD9\u5728STM32CubeMX\u4E2D\u6700\u5BB9\u6613\u5B9E\u73B0\uFF0C\u5728\u201C\u591A\u5A92\u4F53\u201D->\u201CLTDC\u201D->\u201CGPIO\u8BBE\u7F6E\u201D\u4E0B\u8FDB\u884C\u914D\u7F6E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u914D\u7F6E\u663E\u793A\u76F8\u5173GPIO"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9664\u4E86\u7528\u4E8E\u50CF\u7D20\u4F20\u8F93\u768424\u4E2AGPIO(\u5982LTDC_B0) \u4EE5\u5916\uFF0C\u6211\u4EEC\u8FD8\u914D\u7F6E\u4E864\u4E2A\u663E\u793A\u63A7\u5236\u4FE1\u53F7:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4FE1\u53F7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `\u50CF\u7D20\u65F6\u949F\u3002 \u5F53\u5BF924\u4E2A\u7EBF\u4E2D\u7684\u50CF\u7D20\u8FDB\u884C\u91C7\u6837\u65F6\uFF0C\u5411\u663E\u793A\u5668\u53D1\u51FA\u4FE1\u53F7`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_DE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6570\u636E\u4F7F\u80FD\u3002 \u5B83\u88AB\u6FC0\u6D3B\u65F6\u8FDB\u884C\u50CF\u7D20\u4F20\u8F93`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_HSYNC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6C34\u5E73\u540C\u6B65\u3002 \u5141\u8BB8\u663E\u793A\u5668\u627E\u5230\u50CF\u7D20\u884C\u8D77\u70B9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_VSYNC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5782\u76F4\u540C\u6B65\u3002 \u5141\u8BB8\u663E\u793A\u5668\u627E\u5230\u5E27\u8D77\u70B9`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u68C0\u67E5\u60A8\u7684\u786C\u4EF6\u8BBE\u8BA1\u5E76\u8FDB\u884C\u76F8\u5E94\u7684\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "ltdc-configuration"
  }), `LTDC \u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32CubeMX\u4E2D\uFF0CLTDC\u914D\u7F6E\u4F4D\u4E8E\u201C\u591A\u5A92\u4F53\u201D->\u201CLTDC\u201D->\u201C\u53C2\u6570\u8BBE\u7F6E\u201D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u914D\u7F6ELTDC\u53C2\u6570"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u6548\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u4E0E\u663E\u793A\u5668\u7684\u5206\u8FA8\u7387\u5BF9\u5E94\u3002 \u6709\u5173\u540C\u6B65\u8109\u51B2\u5BBD\u5EA6\u548C\u6CBF\u5BBD\u5EA6\uFF0C\u8BF7\u68C0\u67E5\u663E\u793A\u6570\u636E\u624B\u518C\u3002 \u53E6\u8BF7\u6CE8\u610F\u4FE1\u53F7\u6781\u6027\u3002 \u7070\u8272\u7684\u503C\u6839\u636E\u5176\u4ED6\u503C\u8BA1\u7B97\u800C\u6765\u3002 \u8FD9\u4E9B\u503C\u88AB\u5199\u5165LTDC\u5BC4\u5B58\u5668(\u4E5F\u53EF\u5728\u4EE3\u7801\u4E2D\u627E\u5230) \u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\u8BF7\u8F6C\u5230\u591A\u5A92\u4F53-> LTDC-> \u5C42\u8BBE\u7F6E\u201D\u4E0B\u7684LTDC\u5C42\u914D\u7F6E:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u914D\u7F6ELTDC\u5C42\u53C2\u6570"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u8BE5\u6D4B\u8BD5\uFF0C\u5728TouchGFX\u4E2D\uFF0C\u6211\u4EEC\u901A\u5E38\u4EC5\u4F7F\u7528\u4E00\u5C42\u3002 \u7B2C0\u5C42\u7684\u5206\u8FA8\u7387\u5E94\u4E0E\u5E27\u7F13\u51B2\u5927\u5C0F\u5339\u914D\u3002 \u4EE5\u540E\u9700\u8981\u8BBE\u7F6E\u5E27\u7F13\u51B2\u5730\u5740\uFF0C\u8FD9\u91CC\u5148\u4E0D\u7406\u5B83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u58F0\u660E\u4E86\u5C0F\u4E8E\u663E\u793A\u5668\u5206\u8FA8\u7387\u7684\u5E27\u7F13\u51B2\u6570\u7EC4\uFF0C\u5219\u8C03\u6574\u56FE\u5C42\u5927\u5C0F\uFF0C\u4EE5\u4FBF\u4E0E\u5E27\u7F13\u51B2\u5C3A\u5BF8\u5339\u914D\u3002 LTDC\u5C06\u4F20\u8F93\u5E27\u7F13\u51B2\u4E2D\u6CA1\u6709\u7684\u663E\u793A\u5668\u50CF\u7D20\u80CC\u666F\u989C\u8272\u3002 \u5EFA\u8BAE\u5C06\u80CC\u666F\u989C\u8272\u8BBE\u7F6E\u4E3A\u53EF\u8BC6\u522B\u7684\u989C\u8272\uFF0C\u5982\u7EA2\u8272(\u84DD\u8272).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "clock-configuration"
  }), `\u65F6\u949F\u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65F6\u949F\u914D\u7F6E\u4E5F\u5F88\u91CD\u8981\u3002 \u5FC5\u987B\u4F7F\u80FD\u6240\u6709GPIO\u548CLTDC\u7684\u65F6\u949F\u3002 \u50CF\u7D20\u65F6\u949F\u5FC5\u987B\u5728\u663E\u793A\u5668\u53EF\u63A5\u53D7\u7684\u8303\u56F4\u5185\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-04.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u65F6\u949F\u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u53D6\u51B3\u4E8E3\u4E2A\u65F6\u949F: HCLK, PCLK2, and LCD_CLK.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "setting-the-framebuffer-address"
  }), `\u8BBE\u7F6E\u5E27\u7F13\u51B2\u5730\u5740`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32CubeMX\u4E2D\uFF0C\u6211\u4EEC\u5C06\u7B2C0\u5C42\u7684\u5E27\u7F13\u51B2\u5668\u5730\u5740\u914D\u7F6E\u4E3A0xC0000000\u3002 \u6211\u4EEC\u9700\u8981\u5C06\u5176\u66F4\u6539\u4E3A\u5185\u90E8RAM\u4E2D\u7684\u6570\u7EC4\u5730\u5740\u3002 \u8FD9\u53EF\u4EE5\u7528STM32Cube\u56FA\u4EF6\u4E2D\u4E00\u4E2AHAL\u51FD\u6570\u6765\u8F7B\u677E\u5B9E\u73B0\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `  /* USER CODE BEGIN 2 */
  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);
  /* USER CODE END 2 */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `HAL\u51FD\u6570\u4E2D\u7684\u5C42\u7F16\u53F7\u4E3A1\u30012\uFF0C\u800CSTM32CubeMX\u4E2D\u7684\u5C42\u7F16\u53F7\u4E3A0\u30011\u3002 \u53E6\u5916\uFF0CLTDC\u7684\u914D\u7F6E\u53EF\u4EE5\u5B8C\u5168\u7531STM32CubeMX\u751F\u6210\u7684\u51FD\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `MX_LTDC_Init(void)`), `\u6765\u5B8C\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u63A7\u5236\u5668\u5C06\u5E27\u7F13\u51B2\u91CD\u590D\u53D1\u9001\u81F3\u663E\u793A\u5668\u3002 \u663E\u793A\u7684\u56FE\u50CF\u53D6\u51B3\u4E8E\u5E27\u7F13\u51B2\u4E2D\u7684\u503C\u3002 \u5C1D\u8BD5\u5E27\u7F13\u51B2\u4E2D\u7684\u4E0D\u540C\u503C\u6216\u6A21\u5F0F\u3002 \u4F8B\u5982\uFF0C\u4F7F\u7528memset\u5C06\u5E27\u7F13\u51B2\u6E05\u9664\u4E3A0xFF\uFF0C\u4EE5\u663E\u793A\u767D\u5C4F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5728\u67D0\u4E9B\u663E\u793A\u5668\u4E0A\uFF0C\u5FC5\u987B\u5F00\u542F\u80CC\u5149\u624D\u80FD\u4F7F\u56FE\u5F62\u5E27\u53EF\u89C1\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
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
  }), `\u68C0\u67E5\u5E27\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The LTDC interrupt will be used to drive the application forward. \u60A8\u5E94\u4F7F\u7528\u8C03\u8BD5\u5668\u6765\u68C0\u67E5\u662F\u5426\u89E6\u53D1\u4E86\u8BE5\u4E2D\u65AD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u4E9B\u4E2D\u65AD\u95F4\u7684\u65F6\u95F4\u662F\u6240\u6709\u50CF\u7D20\u4F20\u8F93\u548C\u540C\u6B65\u6CBF\u7684\u8017\u65F6\u603B\u548C\u3002 \u60A8\u53EF\u4EE5\u901A\u8FC7\u8C03\u8282\u540C\u6B65\u6CBF\u6765\u8C03\u8282\u5E27\u7387\u3002 \u540C\u6B65\u6CBF\u53C2\u6570\u662FLTDC\u914D\u7F6E\u7684\u4E00\u90E8\u5206\u3002 \u901A\u5E38\u901A\u8FC7\u589E\u5F3A\u573A\u524D\u6CBF\u6765\u964D\u4F4E\u5E27\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u79CD\u6D4B\u91CF\u5E27\u7387\u7684\u7B80\u5355\u65B9\u6CD5\u4E3A\u4F7F\u7528\u4E2D\u65AD\u5904\u7406\u7A0B\u5E8F\u4E2D\u7684HAL_GetTick():`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BF7\u8BB0\u4F4F\uFF0C\u5728\u6BCF\u79D260\u5E27\u7684\u60C5\u51B5\u4E0B\uFF0C\u5404\u4E2A\u5E27\u4E4B\u95F4\u5E94\u8BE5\u67091000 ms / 60 = 16 ms\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "spi-display"
  }), `SPI \u663E\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\u6211\u4EEC\u5C06\u8BA8\u8BBA\u4E0ESPI\u603B\u7EBF\u8FDE\u63A5\u7684\u663E\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u7C7B\u663E\u793A\u5668\u7684\u914D\u7F6E\u4EFB\u52A1\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u914D\u7F6ESPI\u5916\u8BBE\u548CGPIO`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u68C0\u67E5\u65F6\u949F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7F16\u5199\u6216\u627E\u5230\u5FC5\u8981\u7684\u9A71\u52A8\u7A0B\u5E8F\u4EE3\u7801`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "spi-configuration"
  }), `SPI \u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ECESTM32CubeMX\u5F00\u59CB\u5E76\u4F7F\u80FDSPI\u3002 \u8FD9\u4E9B\u56FE\u50CF\u6765\u81EASTM32G081\u9879\u76EE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-05.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI \u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u68C0\u67E5\u4F7F\u7528\u7684SPI\u683C\u5F0F\u7684\u663E\u793A\u5668\u6570\u636E\u624B\u518C(\u6570\u636E\u5927\u5C0F\u548C\u4F4D\u987A\u5E8F) \u3002 \u8BF7\u8BB0\u4F4F\uFF0C16\u4F4D\u5B57\u4EE5\u5C0F\u7AEF\u5B57\u8282\u5E8F\u5B58\u50A8\u5728\u5E27\u7F13\u51B2\u4E2D\u3002 \u68C0\u67E5\u662F\u5426\u53EF\u4EE5\u5C06\u663E\u793A\u5668\u914D\u7F6E\u4E3A\u6B64\u683C\u5F0F\u3002 If not, then you have to convert data during transmission. Also pay attention to the clock polarity and clock phase. \u8FD9\u4E9B\u53C2\u6570\u5DF2\u5728\u663E\u793A\u5668\u6570\u636E\u624B\u518C\u4E2D\u6307\u5B9A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SPI\u65F6\u949F(\u6BD4\u7279\u7387) \u7531FCLK\u7684\u5206\u9891\u5668\u63A7\u5236\u3002 \u6700\u5C0F\u5206\u9891\u5668\u4E3A2\u3002 \u5982\u679CMCU\u6B63\u5728\u8FD0\u884C(\u598264MHz) \uFF0C\u5219\u6700\u5927SPI\u6BD4\u7279\u7387\u4E3A32 MBit/s\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728GPIO\u9009\u9879\u5361\u4E0A\uFF0C\u60A8\u53EF\u4EE5\u68C0\u67E5SPI\u5916\u8BBE\u7684GPIO\u914D\u7F6E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-06.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI GPIO\u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u53F3\u4FA7\u7684\u5F15\u811A\u6392\u5217\u89C6\u56FE\u4E2D\u9009\u62E9GPIO\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-07.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI GPIO\u9009\u62E9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\u5269\u4E0B\u7684\u4EFB\u52A1\u4E3A\u914D\u7F6E\u663E\u793A\u5668\u5E76\u5728SPI\u901A\u9053\u4E0A\u4F20\u8F93\u5E27\u7F13\u51B2\u3002 STM32CubeMX cannot generate this code for you, as it depends heavily on the display. For many displays it is necessary to send a sequence of commands and follow a specific power up sequence. \u4E4B\u540E\uFF0C\u901A\u5E38\u9700\u8981\u8BBE\u7F6E\u989C\u8272\u6A21\u5F0F\uFF0C\u7136\u540E\u5C06\u663E\u793A\u5668\u6253\u5F00\u3002 \u6240\u6709\u8FD9\u4E9B\u5747\u5FC5\u987B\u5728\u4F9B\u5E94\u5546\u63D0\u4F9B\u7684\u6570\u636E\u624B\u518C\u6216\u793A\u4F8B\u4E2D\u6307\u5B9A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32Cube\u56FA\u4EF6\u5305\u542B\u4F7F\u7528SPI\u901A\u4FE1\u7684\u793A\u4F8B\u3002 STM32Cube HAL\u5305\u542B\u5404\u79CD\u51FD\u6570\u3002 \u7528\u4E8E\u53D1\u9001\u6570\u636E\u7684\u57FA\u672C\u51FD\u6570\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32g0xx_hal_spi.h"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `HAL_StatusTypeDef HAL_SPI_Transmit(SPI_HandleTypeDef *hspi, uint8_t *pData, uint16_t Size, uint32_t Timeout);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E9B\u5E93\u51FD\u6570\uFF0C\u76F4\u81F3\u901A\u4FE1\u7A33\u5B9A\u8FD0\u884C\u3002 \u7136\u540E\uFF0C\u53EF\u901A\u8FC7\u7F16\u5199\u4E13\u7528\u51FD\u6570\u6765\u63D0\u9AD8\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7F16\u5199SPI\u663E\u793A\u9A71\u52A8\u7A0B\u5E8F\u7684\u8FC7\u7A0B\u4E2D\uFF0CSPI\u793A\u6CE2\u5668\u6216SPI USB\u8BB0\u5F55\u5668\u53EF\u80FD\u975E\u5E38\u6709\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4ECESPI\u4E0A\u7684\u4F4E\u9891\u5F00\u59CB\uFF0C\u4EE5\u907F\u514D\u566A\u58F0\u95EE\u9898\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "checking-the-display-colors"
  }), `\u68C0\u67E5\u663E\u793A\u5668\u989C\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `At this point where you can transmit a framebuffer to the display, it is advisable to thoroughly check the display colors.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u60F3\u6CD5\u5C31\u662F\u5C06\u989C\u8272\u5199\u5165\u5E27\u7F13\u5B58\uFF0C\u5E76\u901A\u8FC7\u89C6\u89C9\u6765\u68C0\u67E5\u663E\u793A\u5668\u3002 \u4EE5\u4E0B\u4E3A\u4E00\u4E9B\u793A\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6D4B\u8BD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8BF4\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7EA2\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u5E27\u7F13\u5B58\u4E2D\u8BBE\u7F6E\u7EA2\u8272\u3002 \u663E\u793A\u5C4F\u4E5F\u5FC5\u987B\u4E3A\u7EA2\u8272\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7EFF\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u5E27\u7F13\u5B58\u4E2D\u8BBE\u7F6E\u7EFF\u8272\u3002 \u663E\u793A\u5C4F\u4E5F\u5FC5\u987B\u4E3A\u7EFF\u8272\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u84DD\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u5E27\u7F13\u5B58\u4E2D\u8BBE\u7F6E\u84DD\u8272\u3002 \u663E\u793A\u5C4F\u4E5F\u5FC5\u987B\u4E3A\u84DD\u8272\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6DF1\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5982\u679C\u8BBE\u7F6E\u4E3A\u6DF1\u8272\uFF08\u59820x8000\uFF09\uFF0850%\u7EA2\u8272\uFF09\uFF0C\u5219\u5FC5\u987B\u5728\u663E\u793A\u5C4F\u4E0A\u663E\u793A\u9ED1\u8272\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u66F4\u6539\u989C\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6BCF\u79D2\u66F4\u6539\u4E00\u6B21\u5E27\u7F13\u5B58\uFF0C\u7136\u540E\u67E5\u770B\u663E\u793A\u5C4F\u662F\u5426\u66F4\u65B0\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u5C06\u989C\u8272\u653E\u5165RGB565\u5E27\u7F13\u51B2\u4E2D\uFF0C\u53EF\u4F7F\u7528\u4EE5\u4E0B\u65B9\u6848\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E24BPP\u663E\u793A\u5668\uFF0C\u6700\u597D\u4F7F\u7528\u5B57\u8282\u6307\u9488\u6765\u8868\u793A\u4EE3\u7801(\u989C\u8272\u4EE5BGR\u987A\u5E8F\u5B58\u50A8):`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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
  }, "\u663E\u793A\u5F69\u8272\u5E27\u7F13\u5B58"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Changing the framebuffer every second by using the LTDC line event callback:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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