"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9594],{

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

/***/ 24654:
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
  title: "\u7372\u53D6\u5E6B\u52A9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/getting-help",
  "id": "miscellaneous/getting-help",
  "title": "\u7372\u53D6\u5E6B\u52A9",
  "description": "\u5982\u679C\u60A8\u9047\u5230\u56F0\u96E3\u6216\u9700\u8981\u7279\u5B9A\u9818\u57DF\u7684\u66F4\u591A\u8CC7\u8A0A\uFF0C\u60A8\u6709\u8A31\u591A\u7A2E\u65B9\u5F0F\u53EF\u4EE5\u5C31TouchGFX\u76F8\u95DC\u554F\u984C\u5C0B\u6C42\u5E6B\u52A9\u3002 \u9996\u5148\uFF0C\u60A8\u61C9\u95B1\u8B80\u672CTouchGFX\u6587\u4EF6\u3002 \u9019\u662FTouchGFX\u76F8\u95DC\u554F\u984C\u7684\u6700\u5927\u77E5\u8B58\u4F86\u6E90\uFF0C\u6DB5\u84CB\u4E86\u8A31\u591A\u9818\u57DF\u3002 \u5982\u679C\u672C\u6587\u4EF6\u56DE\u7B54\u4E0D\u4E86\u60A8\u7684\u554F\u984C\uFF0C\u60A8\u53EF\u4EE5\u5728\u4EE5\u4E0B\u7DB2\u7AD9\u5C0B\u6C42\u66F4\u591A\u8CC7\u8A0A\uFF1A",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/miscellaneous/getting-help.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/getting-help",
  "permalink": "/4.20/zh-TW/docs/miscellaneous/getting-help",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "getting-help",
    "title": "\u7372\u53D6\u5E6B\u52A9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u66F4\u65B0\u81F3\u65B0\u7684TouchGFX\u7248\u672C",
    "permalink": "/4.20/zh-TW/docs/miscellaneous/updating-to-a-new-touchgfx-version"
  },
  "next": {
    "title": "\u5DF2\u77E5\u554F\u984C",
    "permalink": "/4.20/zh-TW/docs/miscellaneous/known-issues"
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u9047\u5230\u56F0\u96E3\u6216\u9700\u8981\u7279\u5B9A\u9818\u57DF\u7684\u66F4\u591A\u8CC7\u8A0A\uFF0C\u60A8\u6709\u8A31\u591A\u7A2E\u65B9\u5F0F\u53EF\u4EE5\u5C31TouchGFX\u76F8\u95DC\u554F\u984C\u5C0B\u6C42\u5E6B\u52A9\u3002 \u9996\u5148\uFF0C\u60A8\u61C9\u95B1\u8B80\u672CTouchGFX\u6587\u4EF6\u3002 \u9019\u662FTouchGFX\u76F8\u95DC\u554F\u984C\u7684\u6700\u5927\u77E5\u8B58\u4F86\u6E90\uFF0C\u6DB5\u84CB\u4E86\u8A31\u591A\u9818\u57DF\u3002 \u5982\u679C\u672C\u6587\u4EF6\u56DE\u7B54\u4E0D\u4E86\u60A8\u7684\u554F\u984C\uFF0C\u60A8\u53EF\u4EE5\u5728\u4EE5\u4E0B\u7DB2\u7AD9\u5C0B\u6C42\u66F4\u591A\u8CC7\u8A0A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX\u793E\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` ST\u793E\u5340\u4E2D\u5C08\u6CE8\u65BCGUI/TouchGFX\u76F8\u95DC\u4E3B\u984C\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx"
  }), `\u516C\u5171\u8AD6\u58C7`), `\u7DB2\u7AD9\u3002 \u5728\u9019\u88E1\uFF0C\u60A8\u5C07\u627E\u5230\u8A31\u591A\u554F\u984C\u548C\u7B54\u6848\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u6DB5\u84CB\u6240\u6709\u985E\u578B\u7684\u958B\u767C\u554F\u984C\u7684\u6559\u7A0B\u548C\u5F71\u7247\u3002 \u60A8\u53EF\u4EE5\u4F7F\u7528myST\u5E33\u6236\uFF08\u8F15\u9B06\u5730\u514D\u8CBB\u8A3B\u518A\uFF09\u63D0\u51FA\u7279\u5B9A\u6280\u8853\u554F\u984C\u4E26\u7372\u5F97\u7B54\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u7DB2\u8DEF\u7814\u8A0E\u6703\u548C\u5F71\u7247`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.youtube.com/playlist?list=PLnMKNibPkDnHPh5mWtYkSLntmhvtZ4GyU"
  }), `MOOC TouchGFX\u7DB2\u8DEF\u7814\u8A0E\u6703`), `\uFF08\u57F9\u8A13\u5F71\u7247\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.touchgfx.com/resources/demo-videos/webinar-videos/"
  }), `\u5176\u4ED6TouchGFX\u7DB2\u8DEF\u7814\u8A0E\u6703`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.youtube.com/playlist?list=PLnMKNibPkDnGoZA9veTEC4rFSE7xRAGgZ"
  }), `ST Youtube\u983B\u9053`), `\uFF08TouchGFX\u64AD\u653E\u6E05\u55AE\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u7DDA\u4E0A\u652F\u63F4`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://community.st.com/s/onlinesupport"
  }), `Online support site`), ` \u901A\u904EWeb\u8868\u55AE\u63D0\u4EA4\u652F\u63F4\u8ACB\u6C42\u7684\u7DDA\u4E0A\u652F\u63F4\u7DB2\u7AD9\u3002 \u5728\u793E\u5340\u6216TouchGFX\u6587\u4EF6\u4E2D\u627E\u4E0D\u5230\u4EFB\u4F55\u8CC7\u8A0A\u6642\uFF0C\u53EF\u4F7F\u7528\u6B64\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u60A8\u7684\u7576\u5730ST\u652F\u63F4\u7BA1\u9053`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u7576\u5730\u7684ST\u9023\u7D61\u4EBA\u53EF\u4EE5\u76F4\u63A5\u8AAC\u660E\u60A8\u6216\u7372\u53D6\u6240\u9700\u7684\u5F8C\u7AEF\u8FA6\u516C\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Implementer (ST partner)`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Get assistance in any stage of your UI project from one of our dedicated and highly skilled `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.st.com/content/st_com/en/stm32-graphic-user-interface.html"
  }), `TouchGFX Implementers`), ` (scroll down the webpage for a list of implementers). \u6DB5\u84CB\u53EF\u76F4\u63A5\u5D4C\u5165\u5C08\u6848\u7684\u986F\u793A\u5668\u89E3\u6C7A\u65B9\u6848\u3001\u5716\u5F62\u8A2D\u8A08\u5167\u90E8\u670D\u52D9\u3001\u786C\u9AD4\u958B\u767C\u548C\u751F\u7522\u4EE5\u53CA\u8EDF\u9AD4\u7814\u767C\u3002 \u4ED6\u5011\u7684\u65B0\u7A4E\u65B9\u6CD5\u4EE5\u53CA\u95DC\u65BCTouchGFX\u548CSTM32\u5FAE\u63A7\u5236\u5668\u7684\u8C50\u5BCC\u77E5\u8B58\u4F7F\u5176\u6210\u70BA\u60A8\u4E0B\u4E00\u500B\u5D4C\u5165\u5F0F\u7522\u54C1\u7684\u7406\u60F3\u5408\u4F5C\u5925\u4F34\u3002 \u627E\u5230\u60A8\u7684\u5BE6\u73FE\u4EBA\u54E1\uFF0C\u5FEB\u901F\u8F15\u9B06\u5730\u8B93\u60F3\u6CD5\u8B8A\u6210\u6700\u7D42\u7522\u54C1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, `ST Graphic`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.st.com/content/st_com/en/stm32-graphic-user-interface.html"
  }), `\u7DB2\u7AD9`), ` \u6D89\u53CAST Graphic\u7684\u7DB2\u7AD9\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);