"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1757],{

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

/***/ 45135:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class YouTube extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const id = GetIdFromUrl(this.props.url);
    var embedUrl = `https://www.youtube.com/embed/${id}`;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "videoWrapper"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {
      src: embedUrl,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }));
  }
}
function GetIdFromUrl(url) {
  const regex1 = /https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;
  if (regex1.test(url)) {
    return regex1.exec(url)[1];
  }
  const regex2 = /https:\/\/youtu\.be\/(\w+)/;
  if (regex2.test(url)) {
    return regex2.exec(url)[1];
  }
  return url;
}
/* harmony default export */ __webpack_exports__["Z"] = (YouTube);


/***/ }),

/***/ 78451:
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
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
/* harmony import */ var _site_components_YouTube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45135);
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
  id: "welcome",
  title: "TouchGFX \uC124\uBA85\uC11C",
  sidebar_label: "\uD658\uC601 \uD398\uC774\uC9C0",
  description: "TouchGFX\uC5D0 \uB300\uD55C \uC124\uBA85\uC11C \uC0AC\uC774\uD2B8 - \uAC15\uB825\uD55C \uC784\uBCA0\uB514\uB4DC \uD130\uCE58 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uAE30 \uC704\uD55C \uC0AC\uC6A9\uC790 \uCE5C\uD654\uC801\uC778 \uADF8\uB798\uD53D C++ \uB3C4\uAD6C\uC785\uB2C8\uB2E4."
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "introduction/welcome",
  "id": "introduction/welcome",
  "title": "TouchGFX \uC124\uBA85\uC11C",
  "description": "TouchGFX\uC5D0 \uB300\uD55C \uC124\uBA85\uC11C \uC0AC\uC774\uD2B8 - \uAC15\uB825\uD55C \uC784\uBCA0\uB514\uB4DC \uD130\uCE58 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uAE30 \uC704\uD55C \uC0AC\uC6A9\uC790 \uCE5C\uD654\uC801\uC778 \uADF8\uB798\uD53D C++ \uB3C4\uAD6C\uC785\uB2C8\uB2E4.",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/welcome.mdx",
  "sourceDirName": "introduction",
  "slug": "/introduction/welcome",
  "permalink": "/4.20/ko/docs/introduction/welcome",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "welcome",
    "title": "TouchGFX \uC124\uBA85\uC11C",
    "sidebar_label": "\uD658\uC601 \uD398\uC774\uC9C0",
    "description": "TouchGFX\uC5D0 \uB300\uD55C \uC124\uBA85\uC11C \uC0AC\uC774\uD2B8 - \uAC15\uB825\uD55C \uC784\uBCA0\uB514\uB4DC \uD130\uCE58 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uAE30 \uC704\uD55C \uC0AC\uC6A9\uC790 \uCE5C\uD654\uC801\uC778 \uADF8\uB798\uD53D C++ \uB3C4\uAD6C\uC785\uB2C8\uB2E4."
  },
  "sidebar": "docs",
  "previous": {
    "title": "Introduction",
    "permalink": "/4.20/ko/docs/category/introduction"
  },
  "next": {
    "title": "What is TouchGFX?",
    "permalink": "/4.20/ko/docs/introduction/what-is-touchgfx"
  }
};
const assets = {};



const toc = [{
  value: "\uC124\uBA85\uC11C \uC18C\uAC1C",
  id: "about-this-documentation",
  level: 2
}, {
  value: "\uB300\uC0C1 \uC0AC\uC6A9\uC790",
  id: "target-user",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC758 \uACF5\uC2DD \uC124\uBA85\uC11C\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_YouTube__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "https://youtu.be/t0SlRZnERms",
    mdxType: "YouTube"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCF8 \uC124\uBA85\uC11C\uC640 TouchGFX\uB97C \uCC98\uC74C \uC811\uD558\uC2DC\uB294 \uBD84\uB4E4\uC740 \uC804\uBC18\uC801\uC778 \uC774\uD574\uB97C \uB3D5\uAE30 \uC704\uD574 \uC77D\uC5B4\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \uC0AC\uC774\uB4DC\uBC14\uC758 \uBAA9\uCC28\uC5D0\uC11C \uAD00\uC2EC \uC788\uB294 \uC8FC\uC81C\uC5D0 \uB300\uD55C \uB0B4\uC6A9\uC744 \uC27D\uAC8C \uCC3E\uC73C\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC624\uB978\uCABD \uC0C1\uB2E8\uC758 \uAC80\uC0C9 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "about-this-documentation"
  }), `\uC124\uBA85\uC11C \uC18C\uAC1C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC774\uD2B8\uC5D0 \uB300\uD55C \uC774 \uC8FC\uC694 \uC124\uBA85\uC11C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC139\uC158\uC73C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "what-is-touchgfx"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "a"
  }, `\uC18C\uAC1C(Introduction)`)), ` \xA0- TouchGFX \uBC0F \uC124\uCE58 \uAC00\uC774\uB4DC\uC5D0 \uB300\uD55C \uAE30\uBCF8 \uC815\uBCF4 \uC81C\uACF5.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../basic-concepts/embedded-graphics"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "a"
  }, `\uAE30\uBCF8 \uAC1C\uB150(Basic Concepts)`)), ` \xA0- \uADF8\uB798\uD53D \uC8FC\uC694 \uAC1C\uB150 \uC18C\uAC1C.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/development-introduction"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "a"
  }, `\uAC1C\uBC1C(Development)`)), ` \xA0- \uAD6C\uC870, \uC6CC\uD06C\uD50C\uB85C, \uB3C4\uAD6C \uB4F1\uC744 \uD3EC\uD568\uD55C TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C \uBC29\uBC95.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../tutorials/tutorial-01"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "a"
  }, `\uD29C\uD1A0\uB9AC\uC5BC(Tutorials)`)), `\xA0- TouchGFX \uD29C\uD1A0\uB9AC\uC5BC \uBAA8\uC74C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/welcome/frontpage-4.17.png",
    noShadow: "true",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "target-user"
  }), `\uB300\uC0C1 \uC0AC\uC6A9\uC790`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC124\uBA85\uC11C\uB294 TouchGFX \uC124\uBA85\uC11C\uB294 C++\uACFC STM32\uC5D0\uC11C\uC758 \uC784\uBCA0\uB514\uB4DC GUI \uAC1C\uBC1C\uC5D0 \uAD00\uD55C \uAE30\uBCF8\uC801\uC778 \uC2A4\uD0AC\uC744 \uAC16\uCD98 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C\uC790\uB97C \uB300\uC0C1\uC73C\uB85C \uD569\uB2C8\uB2E4. \uC784\uBCA0\uB514\uB4DC GUI \uAC1C\uBC1C\uC774 \uCC98\uC74C\uC774\uC2E0 \uBD84\uB4E4\uC740 Basic Concepts \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4. \uB610\uD55C \uB2E8\uACC4\uBCC4 \uAC00\uC774\uB4DC\uC640 \uD29C\uD1A0\uB9AC\uC5BC\uC774 \uC81C\uACF5\uB418\uAE30 \uB54C\uBB38\uC5D0 \uB204\uAD6C\uB098 TouchGFX \uAC1C\uBC1C \uBC29\uBC95\uC744 \uC190\uC27D\uAC8C \uBC30\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX\uB294 \uC124\uBA85\uC11C\uC758 \uB0B4\uC6A9\uC744 \uAC1C\uC120\uD574 \uB098\uAC00\uACE0\uC790 \uD569\uB2C8\uB2E4.\xA0`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC124\uBA85\uC11C\uC5D0\uC11C \uC774\uD574\uAC00 \uB418\uC9C0 \uC54A\uB294 \uBD80\uBD84\uC774 \uC788\uAC70\uB098 \uCC3E\uB294 \uB0B4\uC6A9\uC774 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx",
    target: "_blank",
    mdxType: "Link"
  }, `\uD3EC\uB7FC`), `!`), `\uC5D0 \uCC38\uC5EC\uD558\uC2DC\uC5B4 \uC124\uBA85\uC11C\uB97C \uAC1C\uC120\uD558\uB294 \uB370 \uB3C4\uC6C0\uC744 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4!`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);