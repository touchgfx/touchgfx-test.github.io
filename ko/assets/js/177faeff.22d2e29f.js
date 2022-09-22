"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7874],{

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

/***/ 10721:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": function() { return /* binding */ assets; },
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./components/PresentationTable.js

class PresentationTable extends react.Component {
  render() {
    return /* @__PURE__ */ react.createElement("table", null, /* @__PURE__ */ react.createElement("tbody", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", {
      align: "left"
    }, "Description"), /* @__PURE__ */ react.createElement("td", null, this.props.description)), /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", {
      align: "left"
    }, "Target Audience"), /* @__PURE__ */ react.createElement("td", null, this.props.level)), /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", {
      align: "left"
    }, "Duration"), /* @__PURE__ */ react.createElement("td", null, this.props.duration)), /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", {
      align: "left"
    }, "Links"), /* @__PURE__ */ react.createElement("td", null, this.props.links))));
  }
}
/* harmony default export */ var components_PresentationTable = (PresentationTable);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
;// CONCATENATED MODULE: ./i18n/ko/docusaurus-plugin-content-docs/current/resources/presentations.mdx
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
  id: "presentations",
  title: "\uD504\uB808\uC820\uD14C\uC774\uC158"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "resources/presentations",
  "id": "resources/presentations",
  "title": "\uD504\uB808\uC820\uD14C\uC774\uC158",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/resources/presentations.mdx",
  "sourceDirName": "resources",
  "slug": "/resources/presentations",
  "permalink": "/4.20/ko/docs/resources/presentations",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "presentations",
    "title": "\uD504\uB808\uC820\uD14C\uC774\uC158"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Resources",
    "permalink": "/4.20/ko/docs/category/resources"
  }
};
const assets = {};


const toc = [{
  value: "TouchGFX \uD504\uB808\uC820\uD14C\uC774\uC158",
  id: "touchgfx-presentations",
  level: 2
}, {
  value: "TouchGFX \uC18C\uAC1C",
  id: "touchgfx-introduction",
  level: 3
}, {
  value: "TouchGFX \uAE30\uC220 \uC18C\uAC1C",
  id: "touchgfx-technical-introduction",
  level: 3
}, {
  value: "\uC784\uBCA0\uB514\uB4DC \uADF8\uB798\uD53D - \uAE30\uBCF8 \uAC1C\uB150",
  id: "embedded-graphics---basic-concepts",
  level: 3
}, {
  value: "\uBCF4\uB4DC \uBE0C\uB9C1 \uC5C5 - \uC18C\uAC1C",
  id: "board-bring-up---introduction",
  level: 3
}, {
  value: "\uCD94\uC0C1\uD654 \uACC4\uCE35 \uAC1C\uBC1C - \uC18C\uAC1C",
  id: "abstraction-layer-development---introduction",
  level: 3
}, {
  value: "\uCD94\uC0C1\uD654 \uACC4\uCE35 \uAC1C\uBC1C - \uACE0\uAE09 \uC8FC\uC81C",
  id: "abstraction-layer-development---advanced-topics",
  level: 3
}, {
  value: "UI \uAC1C\uBC1C - \uAE30\uCD08",
  id: "ui-development---fundamentals",
  level: 3
}, {
  value: "UI \uAC1C\uBC1C - \uD14D\uC2A4\uD2B8 \uBC0F \uAE00\uAF34 \uC0AC\uC6A9",
  id: "ui-development---using-texts-and-fonts",
  level: 3
}, {
  value: "UI \uAC1C\uBC1C - \uBC31\uC5D4\uB4DC \uD1B5\uC2E0",
  id: "ui-development---backend-communication",
  level: 3
}, {
  value: "TouchGFX \uC2E4\uC2B5 \uC6CC\uD06C\uC20D",
  id: "touchgfx-hands-on-workshops",
  level: 2
}, {
  value: "UI \uAC1C\uBC1C - \uC2DC\uC791\uD558\uAE30",
  id: "ui-development---getting-started",
  level: 3
}, {
  value: "UI \uAC1C\uBC1C - \uAE30\uCD08 - \uC2E4\uC2B5",
  id: "ui-development---fundamentals---hands-on",
  level: 3
}, {
  value: "\uCD94\uC0C1\uD654 \uACC4\uCE35 \uAC1C\uBC1C - \uC18C\uAC1C - \uC2E4\uC2B5",
  id: "abstraction-layer-development---introduction---hands-on",
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
  return /* @__PURE__ */ (0,esm/* mdx */.kt)(MDXLayout, __spreadProps(__spreadValues(__spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uB370\uBAA8, \uC138\uBBF8\uB098, \uC6E8\uBE44\uB098 \uBC0F \uC6CC\uD06C\uC20D \uB4F1\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uB2E4\uC591\uD55C TouchGFX \uD504\uB808\uC820\uD14C\uC774\uC158\uC5D0 \uB300\uD574\uC11C \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD504\uB808\uC820\uD14C\uC774\uC158\uC740 \uADF8 \uC790\uCCB4\uB85C \uC0AC\uC6A9\uB418\uAC70\uB098, \uAC1C\uBCC4 TouchGFX \uD504\uB808\uC820\uD14C\uC774\uC158\uC744 \uB9CC\uB4E4\uAE30 \uC704\uD55C \uC544\uC774\uB514\uC5B4 \uC18C\uC2A4\uB85C \uC0AC\uC6A9\uB418\uBA70, \uD639\uC740 \uD2B9\uC815 \uC8FC\uC81C\uC5D0 \uB300\uD55C \uCC38\uACE0 \uC790\uB8CC\uB85C \uC0AC\uC6A9\uB418\uAE30\uB3C4 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `TouchGFX \uB370\uBAA8 \uB610\uB294 \uC138\uBBF8\uB098 \uC8FC\uC81C\uC5D0 \uB530\uB77C \uD544\uC694\uD55C \uD504\uB808\uC820\uD14C\uC774\uC158\uC744 \uC870\uD569\uD574\uC11C \uC0AC\uC6A9\uD558\uBA74 \uB429\uB2C8\uB2E4. \uBAA8\uB4E0 \uD504\uB808\uC820\uD14C\uC774\uC158\uC5D0\uB294 \uAD00\uB828 \uAE00\uC744 \uBE44\uB86F\uD574 \uBCF8 \uC124\uBA85\uC11C \uC0AC\uC774\uD2B8\uC758 \uCC55\uD130\uC640 \uC139\uC158\uC5D0 \uB300\uD55C \uCC38\uC870\uAC00 \uD568\uAED8 \uC81C\uACF5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uD504\uB808\uC820\uD14C\uC774\uC158\uC740 \uC2AC\uB77C\uC774\uB4DC \uD615\uC2DD\uC758 PDF\uC640 \u201C\uBC1C\uD45C\uC790 \uB178\uD2B8\u201D \uBC84\uC804\uC73C\uB85C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uC73C\uBA70, \uBC1C\uD45C\uC790 \uB178\uD2B8\uC5D0\uC11C\uB294 \uBC1C\uD45C\uC790\uC5D0\uAC8C \uC720\uC6A9\uD55C \uD504\uB808\uC820\uD14C\uC774\uC158 \uC815\uBCF4\uB97C \uCD94\uAC00\uB85C \uCC3E\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC77C\uBD80 \uD504\uB808\uC820\uD14C\uC774\uC158\uC740 \uC544\uC9C1 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC9C0\uB9CC \uCD5C\uB300\uD55C \uBE60\uB978 \uC2DC\uC77C \uB0B4\uC5D0 \uC81C\uACF5\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC55E\uC73C\uB85C \uB300\uBD80\uBD84\uC758 \uD504\uB808\uC820\uD14C\uC774\uC158\uC5D0\uB294 \uC2AC\uB77C\uC774\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uD574\uB2F9 \uC8FC\uC81C\uC5D0 \uB300\uD55C \uD504\uB808\uC820\uD14C\uC774\uC158\uC744 \uBCF4\uC5EC\uC8FC\uB294 \uB3D9\uC601\uC0C1\uC774 \uD568\uAED8 \uC81C\uACF5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "touchgfx-presentations"
  }), `TouchGFX \uD504\uB808\uC820\uD14C\uC774\uC158`), /* @__PURE__ */ (0,esm/* mdx */.kt)("div", {
    class: "table-with-anchor-header presentation-table"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "touchgfx-introduction"
  }), `TouchGFX \uC18C\uAC1C`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "\uAE30\uC220 \uC815\uBCF4\uB97C \uC81C\uC678\uD55C TouchGFX\uC5D0 \uB300\uD55C \uC9E7\uACE0 \uC77C\uBC18\uC801\uC778 \uC18C\uAC1C.",
    level: "\uCD08\uAE09 - \uBAA8\uB450",
    duration: "15\uBD84",
    links: "\uC5C6\uC74C.",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "touchgfx-technical-introduction"
  }), `TouchGFX \uAE30\uC220 \uC18C\uAC1C`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX \uAC1C\uBC1C\uC5D0 \uB300\uD55C \uC9E7\uC740 \uAE30\uC220 \uC18C\uAC1C \uAD00\uB828 \uB3C4\uAD6C \uBC0F \uC6CC\uD06C\uD50C\uB85C\uC5D0 \uB300\uD55C \uC124\uBA85.",
    level: "\uCD08\uAE09 - \uBAA8\uB4E0 TouchGFX \uAC1C\uBC1C\uC790",
    duration: "14\uBD84",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-technical-introduction/touchgfx-technical-introduction-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uD504\uB808\uC820\uD14C\uC774\uC158")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-technical-introduction/touchgfx-technical-introduction-speakers-note.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uBC1C\uD45C\uC790 \uB178\uD2B8")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://www.youtube.com/watch?v=rYqeppW46iU",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Youtube \uB3D9\uC601\uC0C1"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "embedded-graphics---basic-concepts"
  }), `\uC784\uBCA0\uB514\uB4DC \uADF8\uB798\uD53D - \uAE30\uBCF8 \uAC1C\uB150`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "\uC784\uBCA0\uB514\uB4DC \uC7A5\uCE58\uC758 \uC8FC\uC694 \uADF8\uB798\uD53D \uAC1C\uB150\uC5D0 \uB300\uD55C \uC77C\uBC18 \uC18C\uAC1C TouchGFX \uD504\uB85C\uC81D\uD2B8 \uAC1C\uBC1C\uC5D0 \uC720\uC6A9\uD55C \uBC30\uACBD \uC9C0\uC2DD",
    level: "\uCD08\uAE09 - TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC790",
    duration: "55\uBD84",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/embedded-graphics-basic-concepts/embedded-graphics-basic-concepts-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uD504\uB808\uC820\uD14C\uC774\uC158")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/embedded-graphics-basic-concepts/embedded-graphics-basic-concepts-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uBC1C\uD45C\uC790 \uB178\uD2B8")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://www.youtube.com/watch?v=rBaV4hk4-M4",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Youtube \uB3D9\uC601\uC0C1"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "board-bring-up---introduction"
  }), `\uBCF4\uB4DC \uBE0C\uB9C1 \uC5C5 - \uC18C\uAC1C`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX \uD504\uB85C\uC81D\uD2B8\uB97C \uC704\uD55C \uBCF4\uB4DC \uBE0C\uB9C1 \uC5C5 \uC2DC \uC54C\uACE0 \uC788\uC5B4\uC57C \uD560 \uC8FC\uC694 \uC8FC\uC81C \uC124\uBA85.",
    level: "\uCD08\uAE09 - \uD558\uB4DC\uC6E8\uC5B4 \uD1B5\uD569\uC790",
    duration: "55\uBD84",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/board-bring-up-introduction/board-bring-up-introduction-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uD504\uB808\uC820\uD14C\uC774\uC158")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/board-bring-up-introduction/board-bring-up-introduction-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uBC1C\uD45C\uC790 \uB178\uD2B8")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://youtu.be/KVRtVtVUZoc",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Youtube \uB3D9\uC601\uC0C1"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-development---introduction"
  }), `\uCD94\uC0C1\uD654 \uACC4\uCE35 \uAC1C\uBC1C - \uC18C\uAC1C`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX \uCD94\uC0C1\uD654 \uACC4\uCE35 \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4 \uC18C\uAC1C. \uCD94\uC0C1\uD654 \uACC4\uCE35\uC758 \uC8FC\uC694 \uC5ED\uD560\uACFC TouchGFX Generator \uC0AC\uC6A9 \uBC29\uBC95 \uC124\uBA85.",
    level: "\uCD08\uAE09 - TouchGFX AL \uAC1C\uBC1C\uC790",
    duration: "12\uBD84",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/abstraction-layer-development-introduction/abstraction-layer-development-introduction-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uD504\uB808\uC820\uD14C\uC774\uC158")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/abstraction-layer-development-introduction/abstraction-layer-development-introduction-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uBC1C\uD45C\uC790 \uB178\uD2B8")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://youtu.be/zs7YCP8oqXo",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Youtube \uB3D9\uC601\uC0C1"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-development---advanced-topics"
  }), `\uCD94\uC0C1\uD654 \uACC4\uCE35 \uAC1C\uBC1C - \uACE0\uAE09 \uC8FC\uC81C`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX \uCD94\uC0C1\uD654 \uACC4\uCE35 \uAC1C\uBC1C\uC5D0 \uB300\uD55C \uACE0\uAE09 \uC8FC\uC81C \uD0D0\uAD6C TouchGFX AL(TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131)\uACFC CubeMX MCU\uC758 \uAD6C\uC131 \uD1B5\uD569 \uBC29\uBC95\uACFC \uC790\uCCB4 BSP \uCD94\uAC00 \uBC29\uBC95, \uADF8\uB9AC\uACE0 TouchGFX\uB97C \uC218\uB3D9\uC73C\uB85C \uAD6C\uC131\uD558\uC5EC CubeMX\uC5D0\uC11C \uAD6C\uC131\uD558\uC9C0 \uBABB\uD558\uB294 \uC2DC\uB098\uB9AC\uC624\uB97C \uC9C0\uC6D0\uD558\uB294 \uBC29\uBC95 \uC124\uBA85",
    level: "\uC911\uAE09 - TouchGFX AL \uAC1C\uBC1C\uC790",
    duration: "60\uBD84",
    links: "\uC5C6\uC74C",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---fundamentals"
  }), `UI \uAC1C\uBC1C - \uAE30\uCD08`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "UI \uAC1C\uBC1C \uC2DC \uBC18\uB4DC\uC2DC \uC54C\uC544\uC57C \uD560 TouchGFX \uD575\uC2EC \uC8FC\uC81C \uC18C\uAC1C UI \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC544\uD0A4\uD14D\uCC98, \uAC1C\uBC1C \uACFC\uC815\uC5D0\uC11C TouchGFX Designer\uB97C \uC0AC\uC6A9\uD55C \uC791\uC5C5 \uBC29\uBC95, PC \uC2DC\uBBAC\uB808\uC774\uD130 \uC0AC\uC6A9, \uC815\uD655\uD558\uACE0 \uD6A8\uC728\uC801\uC778 \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uC791\uC131 \uB4F1 \uB2E4\uC591\uD55C \uC8FC\uC81C \uC124\uBA85",
    level: "\uC911\uAE09 - TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC790",
    duration: "60\uBD84",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/ui-development-fundamentals/ui-development-fundamentals-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uD504\uB808\uC820\uD14C\uC774\uC158")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/ui-development-fundamentals/ui-development-fundamentals-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uBC1C\uD45C\uC790 \uB178\uD2B8")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://www.youtube.com/watch?v=rKAIu2zSHU0",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Youtube \uB3D9\uC601\uC0C1"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---using-texts-and-fonts"
  }), `UI \uAC1C\uBC1C - \uD14D\uC2A4\uD2B8 \uBC0F \uAE00\uAF34 \uC0AC\uC6A9`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "\uAC1C\uBC1C\uC790\uAC00 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD14D\uC2A4\uD2B8\uC640 \uAE00\uAF34\uC744 \uC0AC\uC6A9\uD558\uBA74\uC11C \uACAA\uAC8C \uB418\uB294 \uD604\uC0C1\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uC0C1\uC138 \uC815\uBCF4 \uC18C\uAC1C",
    level: "\uC911\uAE09 - TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC790",
    duration: "60\uBD84",
    links: "\uC5C6\uC74C",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---backend-communication"
  }), `UI \uAC1C\uBC1C - \uBC31\uC5D4\uB4DC \uD1B5\uC2E0`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "\uC2DC\uC2A4\uD15C\uC5D0\uC11C GUI\uAC00 \uC544\uB2CC \uBD80\uBD84\uACFC \uC5F0\uACB0\uD560 \uB54C \uCD94\uCC9C\uD560 \uC218 \uC788\uB294 \uBC29\uBC95 \uC124\uBA85\uACFC \uC774\uC5D0 \uAD00\uD55C \uC608\uC81C \uC18C\uAC1C",
    level: "\uC911\uAE09 - TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC790",
    duration: "60\uBD84",
    links: "\uC5C6\uC74C",
    mdxType: "PresentationTable"
  })), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "touchgfx-hands-on-workshops"
  }), `TouchGFX \uC2E4\uC2B5 \uC6CC\uD06C\uC20D`), /* @__PURE__ */ (0,esm/* mdx */.kt)("div", {
    class: "table-with-anchor-header presentation-table"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---getting-started"
  }), `UI \uAC1C\uBC1C - \uC2DC\uC791\uD558\uAE30`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC5D0 \uB300\uD55C \uC18C\uAC1C \uB3C4\uAD6C \uC124\uCE58, \uCCAB \uBC88\uC9F8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0DD\uC131 \uBC0F \uC218\uC815",
    level: "\uCD08\uAE09 - TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC790",
    duration: "60~90\uBD84",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-workshop-ui-development-getting-started.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uD504\uB808\uC820\uD14C\uC774\uC158")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-workshop-ui-development-getting-started-speakers-note.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uBC1C\uD45C\uC790 \uB178\uD2B8"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---fundamentals---hands-on"
  }), `UI \uAC1C\uBC1C - \uAE30\uCD08 - \uC2E4\uC2B5`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "\uC0AC\uC6A9\uC790 \uC785\uB825\uC5D0 \uB300\uD55C \uBC18\uC751, \uC2A4\uD06C\uB9B0 \uBCC0\uACBD, \uB370\uC774\uD130 \uC720\uC9C0 \uBC0F \uBCF5\uAD6C, \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC, \uD6A8\uC728\uC801\uC778 \uAC1C\uBC1C\uC744 \uC704\uD55C \uD301\uACFC \uC694\uB839 \uB4F1 UI \uAC1C\uBC1C\uC5D0 \uAD00\uD55C \uAE30\uBCF8 \uC815\uBCF4 \uC124\uBA85",
    level: "\uC911\uAE09 - TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC790",
    duration: "2\uC2DC\uAC04",
    links: "\uC5C6\uC74C",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-development---introduction---hands-on"
  }), `\uCD94\uC0C1\uD654 \uACC4\uCE35 \uAC1C\uBC1C - \uC18C\uAC1C - \uC2E4\uC2B5`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "STM32H7B3I-DK \uBCF4\uB4DC\uC5D0\uC11C TouchGFX Generator\uC640 STM32CubeIDE\uB97C \uC0AC\uC6A9\uD558\uB294 TouchGFX AL \uAC1C\uBC1C \uC18C\uAC1C",
    level: "\uCD08\uAE09 - TouchGFX AL \uAC1C\uBC1C\uC790",
    duration: "90\uBD84",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-workshop-al-development-hands-on.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "\uD504\uB808\uC820\uD14C\uC774\uC158")),
    mdxType: "PresentationTable"
  })));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);