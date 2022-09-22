"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9881],{

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

/***/ 15186:
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
  id: "getting-help",
  title: "\u83B7\u53D6\u5E2E\u52A9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/getting-help",
  "id": "miscellaneous/getting-help",
  "title": "\u83B7\u53D6\u5E2E\u52A9",
  "description": "\u5982\u679C\u60A8\u9047\u5230\u56F0\u96BE\u6216\u9700\u8981\u7279\u5B9A\u9886\u57DF\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u60A8\u6709\u5F88\u591A\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5C31TouchGFX\u76F8\u5173\u95EE\u9898\u5BFB\u6C42\u5E2E\u52A9\u3002 \u9996\u5148\uFF0C\u60A8\u5E94\u9605\u8BFB\u672CTouchGFX\u6587\u6863\u3002 \u8FD9\u662FTouchGFX\u76F8\u5173\u95EE\u9898\u7684\u6700\u5927\u77E5\u8BC6\u6765\u6E90\uFF0C\u6DB5\u76D6\u4E86\u5F88\u591A\u65B9\u9762\u3002 \u5982\u679C\u672C\u6587\u6863\u56DE\u7B54\u4E0D\u4E86\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u53EF\u4EE5\u5728\u4EE5\u4E0B\u7AD9\u70B9\u5BFB\u6C42\u66F4\u591A\u4FE1\u606F\uFF1A",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/miscellaneous/getting-help.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/getting-help",
  "permalink": "/4.20/zh-CN/docs/miscellaneous/getting-help",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "getting-help",
    "title": "\u83B7\u53D6\u5E2E\u52A9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u66F4\u65B0\u81F3\u65B0\u7684TouchGFX\u7248\u672C",
    "permalink": "/4.20/zh-CN/docs/miscellaneous/updating-to-a-new-touchgfx-version"
  },
  "next": {
    "title": "\u5DF2\u77E5\u95EE\u9898",
    "permalink": "/4.20/zh-CN/docs/miscellaneous/known-issues"
  }
};
const assets = {};
const toc = [];
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u9047\u5230\u56F0\u96BE\u6216\u9700\u8981\u7279\u5B9A\u9886\u57DF\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u60A8\u6709\u5F88\u591A\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5C31TouchGFX\u76F8\u5173\u95EE\u9898\u5BFB\u6C42\u5E2E\u52A9\u3002 \u9996\u5148\uFF0C\u60A8\u5E94\u9605\u8BFB\u672CTouchGFX\u6587\u6863\u3002 \u8FD9\u662FTouchGFX\u76F8\u5173\u95EE\u9898\u7684\u6700\u5927\u77E5\u8BC6\u6765\u6E90\uFF0C\u6DB5\u76D6\u4E86\u5F88\u591A\u65B9\u9762\u3002 \u5982\u679C\u672C\u6587\u6863\u56DE\u7B54\u4E0D\u4E86\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u53EF\u4EE5\u5728\u4EE5\u4E0B\u7AD9\u70B9\u5BFB\u6C42\u66F4\u591A\u4FE1\u606F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX\u793E\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` ST\u793E\u533A\u4E2D\u4E13\u6CE8\u4E8EGUI/TouchGFX\u76F8\u5173\u4E3B\u9898\u7684\u516C\u5171`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx"
  }), `\u8BBA\u575B`), `\u7F51\u7AD9\u3002 \u5728\u8FD9\u91CC\uFF0C\u60A8\u5C06\u627E\u5230\u8BB8\u591A\u95EE\u9898\u548C\u7B54\u6848\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u6DB5\u76D6\u6240\u6709\u7C7B\u578B\u7684\u5F00\u53D1\u95EE\u9898\u7684\u6559\u7A0B\u548C\u89C6\u9891\u3002 \u60A8\u53EF\u4EE5\u4F7F\u7528myST\u8D26\u6237\uFF08\u8F7B\u677E\u5730\u514D\u8D39\u6CE8\u518C\uFF09\u63D0\u51FA\u7279\u5B9A\u6280\u672F\u95EE\u9898\u5E76\u83B7\u5F97\u7B54\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u7F51\u7EDC\u7814\u8BA8\u4F1A\u548C\u89C6\u9891`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.youtube.com/playlist?list=PLnMKNibPkDnHPh5mWtYkSLntmhvtZ4GyU"
  }), `MOOC TouchGFX\u7F51\u7EDC\u7814\u8BA8\u4F1A`), `\uFF08\u57F9\u8BAD\u89C6\u9891\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.touchgfx.com/resources/demo-videos/webinar-videos/"
  }), `\u5176\u4ED6TouchGFX\u7F51\u7EDC\u7814\u8BA8\u4F1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.youtube.com/playlist?list=PLnMKNibPkDnGoZA9veTEC4rFSE7xRAGgZ"
  }), `ST Youtube\u9891\u9053`), `\uFF08TouchGFX\u64AD\u653E\u5217\u8868\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5728\u7EBF\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://community.st.com/s/onlinesupport"
  }), ` \u652F\u6301\u901A\u8FC7Web\u8868\u5355\u63D0\u4EA4\u7684\u8BF7\u6C42`), `\u3002 \u5728\u793E\u533A\u6216TouchGFX\u6587\u6863\u4E2D\u627E\u4E0D\u5230\u4EFB\u4F55\u4FE1\u606F\u65F6\uFF0C\u53EF\u4F7F\u7528\u6B64\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u7684\u672C\u5730ST\u652F\u6301\u901A\u9053`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u672C\u5730\u7684ST\u8054\u7CFB\u4EBA\u53EF\u4EE5\u76F4\u63A5\u5E2E\u52A9\u60A8\u6216\u83B7\u53D6\u9700\u8981\u7684\u540E\u7AEF\u529E\u516C\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Implementer (ST partner)`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Get assistance in any stage of your UI project from one of our dedicated and highly skilled `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.st.com/content/st_com/en/stm32-graphic-user-interface.html"
  }), `TouchGFX Implementers`), ` (scroll down the webpage for a list of implementers). \u6DB5\u76D6\u53EF\u76F4\u63A5\u5D4C\u5165\u9879\u76EE\u7684\u663E\u793A\u89E3\u51B3\u65B9\u6848\u3001\u56FE\u5F62\u8BBE\u8BA1\u7684\u5185\u5728\u670D\u52A1\u3001\u786C\u4EF6\u5F00\u53D1\u548C\u751F\u4EA7\u4EE5\u53CA\u8F6F\u4EF6\u5F00\u53D1\u3002 \u4ED6\u4EEC\u7684\u65B0\u9896\u65B9\u6CD5\u4EE5\u53CA\u5173\u4E8ETouchGFX\u548CSTM32\u5FAE\u63A7\u5236\u5668\u7684\u4E30\u5BCC\u77E5\u8BC6\u4F7F\u5176\u6210\u4E3A\u60A8\u4E0B\u4E00\u4E2A\u5D4C\u5165\u5F0F\u4EA7\u54C1\u7684\u7406\u60F3\u5408\u4F5C\u4F19\u4F34\u3002 \u627E\u5230\u60A8\u7684\u5B9E\u73B0\u4EBA\u5458\uFF0C\u5FEB\u901F\u8F7B\u677E\u5730\u5C06\u60F3\u6CD5\u8F6C\u53D8\u6210\u6700\u7EC8\u4EA7\u54C1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `ST blog`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://blog.st.com/?s=touchgfx&submit="
  }), `Technical news`), ` on STM32 graphics and TouchGFX.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `ST Graphic\u7F51\u7AD9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6DB5\u76D6ST Graphic\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.st.com/content/st_com/en/stm32-graphic-user-interface.html"
  }), `\u7F51\u7AD9`), `\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);