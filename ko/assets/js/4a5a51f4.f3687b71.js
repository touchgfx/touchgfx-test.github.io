"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3075],{

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

/***/ 58335:
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
  id: "interactions-view",
  title: "\uC0C1\uD638\uC791\uC6A9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/interactions-view",
  "id": "development/ui-development/designer-user-guide/interactions-view",
  "title": "\uC0C1\uD638\uC791\uC6A9",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/interactions-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/interactions-view",
  "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/interactions-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "interactions-view",
    "title": "\uC0C1\uD638\uC791\uC6A9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uAD6C\uC131 \uBDF0",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/config-view"
  },
  "next": {
    "title": "Import & Export",
    "permalink": "/4.20/ko/docs/category/import--export"
  }
};
const assets = {};

const toc = [{
  value: "\uD2B8\uB9AC\uAC70",
  id: "triggers",
  level: 2
}, {
  value: "\uC561\uC158",
  id: "actions",
  level: 2
}, {
  value: "\uC5F0\uC1C4 \uC0C1\uD638\uC791\uC6A9",
  id: "chaining-interactions",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C\uB294 \uD2B8\uB9AC\uAC70 \uBC1C\uC0DD\uD560 \uB54C \uC561\uC158\uC774 \uC2E4\uD589\uB418\uB3C4\uB85D \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX Designer\uC5D0\uC11C \uC0C1\uD638\uC791\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uD2B8\uB9AC\uAC70`), `\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC561\uC158`), `\uC73C\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uD2B8\uB9AC\uAC70`), `\uB780 \uC0C1\uD638\uC791\uC6A9\uC744 \uC2DC\uC791\uD558\uB294 \uAC83\uC73C\uB85C, \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC561\uC158\uC774 \uC2E4\uD589\uB418\uB824\uBA74 \uD2B8\uB9AC\uAC70\uAC00 \uBA3C\uC800 \uBC1C\uC0DD\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uC561\uC158`), `\uC740 \uD2B8\uB9AC\uAC70\uAC00 \uBC1C\uC0DD\uD55C \uD6C4 \uC77C\uC5B4\uB098\uB294 \uAC83\uC744 \uB9D0\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uC815\uC758\uD55C \uD2B8\uB9AC\uAC70 \uC870\uAC74\uC774 \uCDA9\uC871\uB418\uC5C8\uC744 \uB54C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC77C\uC5B4\uB098\uB294 \uC0C1\uD669\uC744 \uACB0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C1\uD638\uC791\uC6A9\uC744 \uCD94\uAC00\uD558\uB824\uBA74 \uBA3C\uC800 \uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C Interactions \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \u201C+\u201D \uBC84\uD2BC\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/add-interaction-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 Interactions \uD0ED"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"+" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uC0C1\uD638\uC791\uC6A9\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4. \uC0C1\uD638\uC791\uC6A9 \uC138\uBD80 \uC815\uBCF4 \uBDF0(\uC67C\uCABD)\uB294 \uC0C1\uD638\uC791\uC6A9\uC5D0 \uC9C0\uC815\uD558\uB294 \uC774\uB984\uACFC \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uAD6C\uC131 \uC635\uC158\uC73C\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C1\uD638\uC791\uC6A9 \uC694\uC57D \uBDF0(\uC624\uB978\uCABD)\uC5D0\uB294 \uC120\uD0DD\uD55C \uD2B8\uB9AC\uAC70\uC640 \uC561\uC158\uC5D0 \uB530\uB77C \uBCC0\uACBD\uB418\uB294 \uB3D9\uC801 \uC124\uBA85\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uC774\uBBF8\uC9C0\uC5D0\uC11C\uB294 \uD2B8\uB9AC\uAC70\uC640 \uC561\uC158\uC744 \uC120\uD0DD\uD558\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC5D0 \uB3D9\uC801 \uC124\uBA85\uC5D0 "When none none"\uB77C\uACE0 \uD45C\uC2DC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C1\uD638\uC791\uC6A9 \uC694\uC57D \uBDF0\uC5D0 \uC788\uB294 x \uC544\uC774\uCF58 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uC0C1\uD638\uC791\uC6A9 \uC0AD\uC81C \uC5EC\uBD80\uB97C \uBB3B\uB294 \uD655\uC778 \uD31D\uC5C5 \uCC3D\uC774 \uB098\uD0C0\uB098\uBA70, \uC774\uB97C \uD1B5\uD574 \uC0C1\uD638\uC791\uC6A9\uC744 \uC0AD\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C1\uD638\uC791\uC6A9 \uC138\uBD80 \uC815\uBCF4 \uBDF0\uC758 \uBC14\uAE65 \uC601\uC5ED\uC744 \uD074\uB9AD\uD558\uBA74 \uC138\uBD80 \uC815\uBCF4 \uBDF0\uAC00 \uC811\uD799\uB2C8\uB2E4. \uC774\uD6C4 \uC0C1\uD638\uC791\uC6A9 \uC694\uC57D \uBDF0\uB97C \uD074\uB9AD\uD558\uBA74 \uC0C1\uD638\uC791\uC6A9 \uC138\uBD80 \uC815\uBCF4 \uBDF0\uAC00 \uB2E4\uC2DC \uC5F4\uB9BD\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/empty-interaction-4.17.png",
    mdxType: "Figure"
  }, "Interactions \uD0ED\uC758 \uC0C8\uB85C\uC6B4 \uC0C1\uD638\uC791\uC6A9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "triggers"
  }), `\uD2B8\uB9AC\uAC70`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Trigger \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uB294 \uD604\uC7AC \uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0 \uCD94\uAC00\uB41C \uC704\uC82F\uC5D0 \uB530\uB77C \uB2E4\uB974\uAC8C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\uBE48 \uC2A4\uD06C\uB9B0\uC740 3\uAC1C\uC758 \uD2B8\uB9AC\uAC70\uB9CC \uC0AC\uC6A9\uAC00\uB2A5\uD569\uB2C8\uB2E4: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Hardware button is clicked`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Screen transition begins`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Screen transition ends`), `\uAE4C\uC9C0 \uCD1D 3\uAC1C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC82F\uC744 \uCD94\uAC00\uD558\uBA74 \uAD00\uB828 \uD2B8\uB9AC\uAC70\uB3C4 \uCD94\uAC00\uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `Button`), ` \uC704\uC82F\uC744 \uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0 \uCD94\uAC00\uD558\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Button is clicked`), ` \uD2B8\uB9AC\uAC70\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Button is clicked`), ` \uAC19\uC740 \uC77C\uBD80 \uD2B8\uB9AC\uAC70\uB294 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uC120\uD0DD\uD574\uC57C \uD558\uB294 \uAD6C\uC131\uC694\uC18C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uD2B8\uB9AC\uAC70\uC5D0 \uB9DE\uB294 \uC704\uC82F\uC774 \uD55C \uAC1C\uBFD0\uC778 \uACBD\uC6B0\uC5D0\uB294 \uD574\uB2F9 \uC704\uC82F\uC774 \uC790\uB3D9\uC73C\uB85C \uC120\uD0DD\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-4.17.png",
    mdxType: "Figure"
  }, "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uC120\uD0DD\uB41C Button is Clicked \uD2B8\uB9AC\uAC70"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uC774\uBBF8\uC9C0\uB97C \uBCF4\uBA74 \uD2B8\uB9AC\uAC70\uB97C \uC120\uD0DD\uD55C \uD6C4 \uC0C1\uD638\uC791\uC6A9 \uC694\uC57D \uBDF0\uC758 \uB3D9\uC801 \uC124\uBA85\uC774 "When none none"\uC5D0\uC11C "When button1 clicked none"\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB41C \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "actions"
  }), `\uC561\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Action \uB4DC\uB86D\uB2E4\uC6B4 \uC5ED\uC2DC \uD604\uC7AC \uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0 \uCD94\uAC00\uB41C \uC704\uC82F\uC5D0 \uB530\uB77C \uB2E4\uB974\uAC8C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\uBE48 \uC2A4\uD06C\uB9B0\uC740 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC561\uC158\uC774 \uC544\uB798\uC640 \uAC19\uC774 \uCD1D 5\uAC1C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Call new virtual function`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Change screen`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Execute C++ code`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Set Language`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Wait for`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC82F\uC744 \uCD94\uAC00\uD558\uBA74 \uAD00\uB828\uB41C \uC561\uC158\uB3C4 \uCD94\uAC00\uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `Button`), ` \uC704\uC82F\uC744 \uCD94\uAC00\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC561\uC158\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Move widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Fade widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Hide widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Show widget`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Move widget`), `\uACFC \uAC19\uC740 \uC77C\uBD80 \uC561\uC158\uC758 \uACBD\uC6B0, \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uC120\uD0DD\uD574\uC57C \uD558\uB294 \uAD6C\uC131\uC694\uC18C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC561\uC158\uC5D0 \uB9DE\uB294 \uC704\uC82F\uC774 \uD55C \uAC1C\uBFD0\uC778 \uACBD\uC6B0\uC5D0\uB294 \uD574\uB2F9 \uC704\uC82F\uC774 \uC790\uB3D9\uC73C\uB85C \uC120\uD0DD\uB429\uB2C8\uB2E4. \uB610\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Move widget`), ` \uC561\uC158\uC744 \uC120\uD0DD\uD558\uBA74 \uC704\uC82F \uC774\uB3D9\uACFC \uAD00\uB828\uD558\uC5EC \uB2E4\uB978 \uC18D\uC131\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-move-button1-action-4.17.png",
    mdxType: "Figure"
  }, "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uC120\uD0DD\uB41C Move Widget \uC561\uC158"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uB97C \uBCF4\uBA74 \uC561\uC158\uC744 \uC120\uD0DD\uD55C \uD6C4 \uC0C1\uD638\uC791\uC6A9 \uC694\uC57D \uBDF0\uC758 \uB3D9\uC801 \uC124\uBA85\uC774 "When button1 clicked none"\uC5D0\uC11C "When button1 clicked move button1"\uB85C \uC5C5\uB370\uC774\uD2B8\uB41C \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "chaining-interactions"
  }), `\uC5F0\uC1C4 \uC0C1\uD638\uC791\uC6A9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uC561\uC158\uC774 \uC644\uB8CC\uB418\uBA74 \uB610 \uB2E4\uB978 \uC0C1\uD638\uC791\uC6A9\uC744 \uD2B8\uB9AC\uAC70\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uB3D9\uC791\uC744 \uD65C\uC131\uD654\uD558\uB824\uBA74 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Can trigger another interaction`), ` \uD655\uC778\uB780\uC744 \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-can-trigger-another-interaction-enabled-4.17.png",
    mdxType: "Figure"
  }, "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uD65C\uC131\uD654\uB41C Can trigger another interaction"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB3D9\uC791\uC774 \uD65C\uC131\uD654\uB418\uBA74 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uC0C1\uD638\uC791\uC6A9\uC774 \uC644\uB8CC\uB418\uBA74\uC11C \uB610 \uB2E4\uB978 \uC0C1\uD638\uC791\uC6A9\uC774 \uD2B8\uB9AC\uAC70\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-triggering-on-another-interaction-4.17.png",
    mdxType: "Figure"
  }, "\uB610 \uB2E4\uB978 \uC0C1\uD638\uC791\uC6A9\uC744 \uD2B8\uB9AC\uAC70\uD558\uB294 \uC0C1\uD638\uC791\uC6A9"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);