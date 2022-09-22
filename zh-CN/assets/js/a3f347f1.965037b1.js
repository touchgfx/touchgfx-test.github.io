"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8223],{

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

/***/ 13539:
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
  id: "04-enable-external-ram",
  title: "4. \u5916\u90E8RAM",
  sidebar_label: "4. \u5916\u90E8RAM"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/04-enable-external-ram",
  "id": "development/board-bring-up/how-to/04-enable-external-ram",
  "title": "4. \u5916\u90E8RAM",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/04-enable-external-ram.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/04-enable-external-ram",
  "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/04-enable-external-ram",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 4,
  "frontMatter": {
    "id": "04-enable-external-ram",
    "title": "4. \u5916\u90E8RAM",
    "sidebar_label": "4. \u5916\u90E8RAM"
  },
  "sidebar": "docs",
  "previous": {
    "title": "3. \u663E\u793A\u5668\u7684\u5E27\u7F13\u5B58\u4F4D\u4E8E\u5185\u90E8RAM\u4E2D",
    "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/03-display-internal"
  },
  "next": {
    "title": "5. \u663E\u793A\u5668\u7684\u5E27\u7F13\u5B58\u4F4D\u4E8E\u5916\u90E8RAM\u4E2D",
    "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/05-display-external"
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
  value: "\u8FDB\u4E00\u6B65\u914D\u7F6E",
  id: "further-configuration",
  level: 3
}, {
  value: "\u6D4B\u8BD5 RAM",
  id: "testing-the-ram",
  level: 3
}, {
  value: "\u6D4B\u8BD5RAM\u5728\u8C03\u8BD5\u5668\u4E2D\u53EF\u89C1\u3002",
  id: "test-ram-is-visible-in-the-debugger",
  level: 4
}, {
  value: "RAM\u5728\u6574\u4E2A\u8303\u56F4\u5185\u53EF\u8BFB\u53EF\u5199",
  id: "ram-is-readable-and-writeable-in-the-whole-range",
  level: 4
}, {
  value: "\u6027\u80FD\u7B26\u5408\u9884\u671F",
  id: "performance-is-as-expected",
  level: 4
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
  }), `\u52A8\u673A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BE5\u6B65\u9AA4\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F7F\u80FD\u5916\u90E8SDRAM\u3002 \u56FE\u5F62\u5E94\u7528\u901A\u5E38\u9700\u8981\u5916\u90E8RAM\uFF0C\u5728\u8BB8\u591A\u5206\u8FA8\u7387\u4E0B\u6240\u9700\u5E27\u7F13\u5B58\u8F83\u5927\uFF0C\u800C\u65E0\u6CD5\u4F7F\u7528\u5185\u90E8RAM\u3002 \u67D0\u4E9B\u5E94\u7528\u53EF\u80FD\u4F7F\u7528\u4E24\u5230\u4E09\u4E2A\u5E27\u7F13\u5B58\uFF0C\u56E0\u6B64\u66F4\u52A0\u9700\u8981\u5916\u90E8RAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5982\u679C\u6240\u7528\u5F00\u53D1\u677F\u4E0D\u5916\u6269RAM\uFF0C\u8BF7\u8DF3\u8FC7\u6B64\u6B65\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u5E27\u7F13\u5B58\u8981\u653E\u5728\u5916\u90E8RAM\u65F6\uFF0C\u786E\u4FDD\u5916\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u8BFB\u53EF\u5199\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E76\u4EE5\u6240\u9700\u901F\u5EA6\uFF08\u901A\u5E38\u4E3A\u6700\u5927\u901F\u5EA6\uFF09\u8FD0\u884C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6807`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u65E8\u5728\u542F\u7528\u5916\u90E8RAM\uFF0C\u5E76\u4ECE\u4E2D\u8BFB\u53D6\u548C\u5199\u5165\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
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
  }), `\u5916\u90E8RAM\u53EF\u8BFB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u53EF\u7528\u4E8E\u5E27\u7F13\u51B2\u533A\u4F4D\u7F6E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u53EF\u5199`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u53EF\u7528\u4E8E\u5E27\u7F13\u51B2\u533A\u4F4D\u7F6E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F7F\u7528\u5916\u90E8RAM\u4F5C\u4E3A\u5E27\u7F13\u5B58\u65F6\uFF0C\u56FE\u5F62\u5904\u7406\u6027\u80FD\u53EF\u63A5\u53D7`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u5148\u51B3\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u6B64\u6B65\u9AA4\u7684\u5148\u51B3\u6761\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u5173RAM\u7684\u4FE1\u606F\uFF0C\u901A\u5E38\u4E3A\u6570\u636E\u624B\u518C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u5173MCU\u4E0E\u5916\u90E8RAM\u4E4B\u95F4\u7684\u8FDE\u63A5\u7684\u4FE1\u606F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u6267\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32CubeMX\u4E2D\uFF0C\u901A\u8FC7\u201CConnectivity\u201D->\u201CFMC\u201D->\u201CSDRAM1\u201D\u6765\u914D\u7F6E\u5916\u90E8SDRAM\u63A7\u5236\u5668\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/external-ram/cubemx-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u914D\u7F6ESDRAM"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `AHB\u65F6\u949F(HCLK) \u662FFMC\u5B58\u50A8\u63A7\u5236\u5668\u7684\u53C2\u8003\u65F6\u949F\u3002 \u68C0\u67E5\u201C\u65F6\u949F\u914D\u7F6E\u201D\u4E0B\u7684\u65F6\u949F\u9891\u7387\uFF0C\u5E76\u4F7F\u7528\u8BE5\u9891\u7387\u8BA1\u7B97\u5404\u79CDSDRAM\u65F6\u949F\u5468\u671F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BF7\u8BB0\u4F4F\u914D\u7F6E\u7528\u4E8ESDRAM\u7684\u6240\u6709GPIO\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/external-ram/cubemx-02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u914D\u7F6ESDRAM GPIO"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "further-configuration"
  }), `\u8FDB\u4E00\u6B65\u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u67D0\u4E9BRAM\u82AF\u7247\uFF0C\u8FD8\u5FC5\u987B\u8FDB\u884C\u5176\u4ED6\u7279\u5B9A\u7684\u914D\u7F6E\u3002 \u8FD9\u90E8\u5206\u4E0D\u80FD\u5728STM32CubeMX\u4E2D\u914D\u7F6E\uFF0C\u800C\u5FC5\u987B\u5728C\u4EE3\u7801\u4E2D\u5B8C\u6210\u3002 STM32Cube HAL\u5305\u542B\u7528\u6237\u5411\u8BBE\u5907\u53D1\u9001\u547D\u4EE4\u7684\u51FD\u6570\u3002 \u4E0B\u9762\u4E3A\u4E00\u4E2A\u793A\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FMC_SDRAM_CommandTypeDef Command;

/* Step 1: Configure a clock configuration enable command */
Command.CommandMode            = FMC_SDRAM_CMD_CLK_ENABLE;
Command.CommandTarget          = FMC_SDRAM_CMD_TARGET_BANK1;
Command.AutoRefreshNumber      = 1;
Command.ModeRegisterDefinition = 0;

/* Send the command */
HAL_SDRAM_SendCommand(&hsdram1, &Command, SDRAM_TIMEOUT);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "testing-the-ram"
  }), `\u6D4B\u8BD5 RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u914D\u7F6E\u5916\u90E8RAM\u540E\uFF0C\u52A1\u5FC5\u5BF9\u5176\u8FDB\u884C\u6D4B\u8BD5\u3002 \u6211\u4EEC\u5E94\u81F3\u5C11\u6D4B\u8BD5\u4EE5\u4E0B\u5185\u5BB9:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RAM\u5728\u8C03\u8BD5\u5668\u4E2D\u53EF\u89C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RAM\u5728\u6574\u4E2A\u8303\u56F4\u5185\u53EF\u8BFB\u53EF\u5199`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6027\u80FD\u7B26\u5408\u9884\u671F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B58\u50A8\u63A7\u5236\u5668\u6839\u636E\u5916\u90E8\u5B58\u50A8\u5668\u7684\u7C7B\u578B\u4F7F\u7528\u5176\u56FA\u5B9A\u5730\u5740\u6620\u5C04\u3002 \u68C0\u67E5\u5FAE\u63A7\u5236\u5668\u7684\u6570\u636E\u624B\u518C\u4EE5\u786E\u8BA4\u5176\u5730\u5740\u3002 SDRAM\u901A\u5E38\u6620\u5C04\u52300xC0000000(\u5B58\u50A8\u533A\u57DF1) \u62160xD0000000(\u5B58\u50A8\u533A\u57DF2) \u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "test-ram-is-visible-in-the-debugger"
  }), `\u6D4B\u8BD5RAM\u5728\u8C03\u8BD5\u5668\u4E2D\u53EF\u89C1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u80FDRAM\u540E\u7684\u7B2C\u4E00\u4E2A\u6D4B\u8BD5\u4E3A\u501F\u52A9\u8C03\u8BD5\u5668\u8BBF\u95EE\u5B83\u3002 \u8FD9\u6837\u5C31\u53EF\u4EE5\u8F7B\u677E\u786E\u8BA4\u662F\u5426\u53EF\u4EE5\u8BFB\u5199\u5B58\u50A8\u5668\u3002 \u53EA\u9700\u4F7F\u7528\u5B58\u50A8\u5668\u6D4F\u89C8\u5668\u6253\u5F00\u4EE5\u4E0B\u5730\u5740\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/external-ram/iar-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u901A\u8FC7\u8C03\u8BD5\u5668\u6D4B\u8BD5\u5B58\u50A8\u533A\u57DF2\u4E2D\u4EE50xD0000000\u8D77\u59CB\u7684\u5B58\u50A8\u6BB5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "ram-is-readable-and-writeable-in-the-whole-range"
  }), `RAM\u5728\u6574\u4E2A\u8303\u56F4\u5185\u53EF\u8BFB\u53EF\u5199`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u4E00\u4E2A\u6D4B\u8BD5\u4E3A\u7F16\u5199\u5C0F\u7A0B\u5E8F\uFF0C\u5C06\u66F4\u591A\u6570\u636E\u5199\u5165\u5916\u90E8\u5B58\u50A8\u5668\u3002 \u6700\u597D\u6D4B\u8BD5\u6574\u4E2A\u5B58\u50A8\u5668\u3002 \u4EE5\u4E0B\u662F\u8D77\u70B9:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t *externalRAM = 0xC000000;
const uint32_t size = 1000;

//write external RAM
for(int i = 0; i < size; i++)
{
    externalRAM[i] = i;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u5728\u8C03\u8BD5\u5668\u4E2D\u518D\u6B21\u68C0\u67E5\u5B58\u50A8\u5668\u3002 \u8FD9\u53EF\u4EE5\u663E\u793A\u67D0\u4E9B\u7C7B\u578B\u7684\u9519\u8BEF\uFF0C\u4F8B\u5982\uFF0C\u67D0\u4E9B\u5730\u5740\u5F15\u811A\u662F\u5426\u672A\u8FDE\u63A5\u6216\u672A\u4EA4\u6362\u3002 \u60A8\u8FD8\u5E94\u5C1D\u8BD5\u4E0D\u540C\u5927\u5C0F\u7684\u5199\u5165\u503C\u3002 \u4EC5\u4EC5\u5199\u5165\u5C0F\u6570\u5B57(\u59820\u30011\u30012\u30013) \u5F80\u5F80\u65E0\u6CD5\u63ED\u793A\u67D0\u4E9B\u6570\u636E\u5F15\u811A\u662F\u5426\u6B63\u5E38\u8FDE\u63A5\u6216\u635F\u574F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7A0B\u5E8F\u6765\u8BFB\u53D6\u5B58\u50A8\u5668\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t *externalRAM = 0xC000000;
const uint32_t size = 1000;

//read external RAM
for(int i = 0; i < size; i++)
{
    ASSERT(externalRAM[i] == i, "external RAM not as expected");
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BF7\u8BB0\u4F4F\uFF0C\u6B64\u7C7B\u6D4B\u8BD5\u65E0\u6CD5\u786E\u5B9A\u5730\u5740\u662F\u5426\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B32\u6D4B\u8BD5\u6240\u6709\u5B58\u50A8\u5355\u5143\u3002 \u8981\u4E48\u901A\u8FC7\u8FD0\u884C\u66F4\u957F\u7684\u5FAA\u73AF\uFF0C\u8981\u4E48\u968F\u610F\u66F4\u6539\u8D77\u59CB\u5730\u5740\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "performance-is-as-expected"
  }), `\u6027\u80FD\u7B26\u5408\u9884\u671F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u73B0\u5728\u9700\u8981\u6D4B\u8BD5\u5916\u90E8RAM\u7684\u6027\u80FD\u3002 \u5F53\u5E27\u7F13\u5B58\u4F4D\u4E8E\u5916\u90E8\u5B58\u50A8\u5668\u4E2D\u65F6\uFF0C\u6027\u80FD\u5F88\u91CD\u8981\u3002 \u7F13\u6162\u7684\u5B58\u50A8\u5668\u4F1A\u4F7F\u7CFB\u7EDF\u7684\u56FE\u5F62\u5904\u7406\u6027\u80FD\u964D\u4F4E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6D4B\u8BD5\u8BFB\u53D6\u3001\u5199\u5165\u548C\u4FEE\u6539RAM\u7684\u901F\u5EA6\u3002 \u901A\u5E38\uFF0C\u56FE\u5F62\u5E94\u7528\u4F1A\u5C06\u8BB8\u591A\u6570\u636E\u4ECE\u4E00\u4E2A\u5B58\u50A8\u5668\u590D\u5236\u5230\u53E6\u4E00\u4E2A\u5B58\u50A8\u5668\u3002 \u5728\u7ED8\u56FE\u64CD\u4F5C\u671F\u95F4\u5C06\u5927\u91CF\u5199\u5165\u5E27\u7F13\u51B2\uFF0C\u800C\u5728\u4F20\u8F93\u81F3\u663E\u793A\u5668\u65F6\u5C06\u8FDB\u884C\u5927\u91CF\u8BFB\u53D6\u64CD\u4F5C\u3002 \u6211\u4EEC\u53EF\u901A\u8FC7\u6D4B\u8BD5\u7A0B\u5E8F\u6765\u6A21\u62DF\u8FD9\u4E9B\u64CD\u4F5C:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `volatile uint32_t *externalRAM = 0xC000000;
uint32_t sourcedata[10000];
const uint32_t size = 10000;

int begin = HAL_GetTick();
//write external RAM
for(int i = 0; i < size; i++)
{
    externalRAM[i] = sourcedata[i];
}
int end = HAL_GetTick();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int begin = HAL_GetTick();
//Read external RAM
for(int i = 0; i < size; i++)
{
    sourcedata[i] = externalRAM[i];
}
int end = HAL_GetTick();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u5728\u80CC\u666F\u4E0A\u6DF7\u5408\u56FE\u5F62\u65F6\uFF0C\u56FE\u5F62\u5904\u7406\u8F6F\u4EF6\u53EF\u5728\u5E27\u7F13\u51B2\u4E2D\u8BFB\u53D6\u548C\u5199\u5165\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//Time modifying external RAM
int begin = HAL_GetTick();
for(int i = 0; i < size; i++)
{
    externalRAM[i] += 2;
}
int end = HAL_GetTick();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u636E\u60A8\u7684\u5B58\u50A8\u5668\u901F\u5EA6\u548C\u60F3\u8981\u7684\u7CBE\u5EA6\uFF0C\u60A8\u53EF\u80FD\u5E0C\u671B\u5FAA\u73AF\u6D4B\u8BD5100\u6B21\uFF0C\u4EE5\u4F7F\u7ED3\u679C\u66F4\u53EF\u9760\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5916\u90E8RAM\u65F6\u949F\u8FC7\u5FEB\uFF0C\u5219\u53EF\u80FD\u5728\u8BFB\u53D6\u6216\u5199\u5165\u64CD\u4F5C\u671F\u95F4\u5BFC\u81F4\u9519\u8BEF\u3002 \u901A\u8FC7\u8FD9\u4E9B\u8F83\u7B80\u5355\u7684\u6D4B\u8BD5\u53EF\u80FD\u5F88\u96BE\u770B\u5230\u8FD9\u4E00\u70B9\uFF0C\u4F46\u8FD9\u5728\u663E\u793A\u5668\u4E0A\u53EF\u4EE5\u76F4\u89C2\u5730\u611F\u53D7\u5230\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);