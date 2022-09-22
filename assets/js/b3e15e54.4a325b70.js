"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1256],{

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

/***/ 64195:
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
;// CONCATENATED MODULE: ./docs/resources/presentations.mdx
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
  title: "Presentations"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "resources/presentations",
  "id": "resources/presentations",
  "title": "Presentations",
  "description": "",
  "source": "@site/docs/resources/presentations.mdx",
  "sourceDirName": "resources",
  "slug": "/resources/presentations",
  "permalink": "/4.20/docs/resources/presentations",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "presentations",
    "title": "Presentations"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Resources",
    "permalink": "/4.20/docs/category/resources"
  }
};
const assets = {};


const toc = [{
  value: "TouchGFX Presentations",
  id: "touchgfx-presentations",
  level: 2
}, {
  value: "TouchGFX Introduction",
  id: "touchgfx-introduction",
  level: 3
}, {
  value: "TouchGFX Technical Introduction",
  id: "touchgfx-technical-introduction",
  level: 3
}, {
  value: "Embedded Graphics - Basic Concepts",
  id: "embedded-graphics---basic-concepts",
  level: 3
}, {
  value: "Board Bring Up - Introduction",
  id: "board-bring-up---introduction",
  level: 3
}, {
  value: "Abstraction Layer Development - Introduction",
  id: "abstraction-layer-development---introduction",
  level: 3
}, {
  value: "Abstraction Layer Development - Advanced Topics",
  id: "abstraction-layer-development---advanced-topics",
  level: 3
}, {
  value: "UI Development - Fundamentals",
  id: "ui-development---fundamentals",
  level: 3
}, {
  value: "UI Development - Using Texts and Fonts",
  id: "ui-development---using-texts-and-fonts",
  level: 3
}, {
  value: "UI Development - Backend Communication",
  id: "ui-development---backend-communication",
  level: 3
}, {
  value: "TouchGFX Hands-on Workshops",
  id: "touchgfx-hands-on-workshops",
  level: 2
}, {
  value: "UI Development - Getting Started",
  id: "ui-development---getting-started",
  level: 3
}, {
  value: "UI Development - Fundamentals - Hands on",
  id: "ui-development---fundamentals---hands-on",
  level: 3
}, {
  value: "Abstraction Layer Development - Introduction - Hands on",
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
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `In this section, you will find a wide range of TouchGFX presentations used for demonstrations, seminars, webinars and workshops.
The presentations can be used directly or as inspiration for TouchGFX presentations of your own or simply as a source of information on a given topic.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `It is the intention that you can piece together a set of presentations to match your needs for topics for a TouchGFX demonstration or seminar.
All presentations come with references to relevant articles and to chapters and sections on this documentation site.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Presentations are available for download in slide format PDFs and in "speaker's note" versions where additional presentation information for the speaker can be found.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Not all presentations are available yet, but will be made available as soon as ready.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `It is the intention, that in the future most of the presentations will be accompanied by videos that show a presentation of the topic using the slides.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "touchgfx-presentations"
  }), `TouchGFX Presentations`), /* @__PURE__ */ (0,esm/* mdx */.kt)("div", {
    class: "table-with-anchor-header presentation-table"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "touchgfx-introduction"
  }), `TouchGFX Introduction`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "A short, general and non-technical introduction to TouchGFX.",
    level: "Beginner - All",
    duration: "15 minutes",
    links: "Not available yet.",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "touchgfx-technical-introduction"
  }), `TouchGFX Technical Introduction`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "A short, technical introduction to doing TouchGFX development. Covers the tools involved and describes the workflow.",
    level: "Beginner - Any TouchGFX Developers",
    duration: "14 minutes",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-technical-introduction/touchgfx-technical-introduction-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Presentation")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-technical-introduction/touchgfx-technical-introduction-speakers-note.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Speaker notes")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://www.youtube.com/watch?v=rYqeppW46iU",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Video available on Youtube"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "embedded-graphics---basic-concepts"
  }), `Embedded Graphics - Basic Concepts`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "A general introduction to key concepts of graphics on embedded devices. Good background knowledge for doing TouchGFX project development.",
    level: "Beginner - TouchGFX Application Developers",
    duration: "55 minutes",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/embedded-graphics-basic-concepts/embedded-graphics-basic-concepts-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Presentation")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/embedded-graphics-basic-concepts/embedded-graphics-basic-concepts-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Speaker notes")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://www.youtube.com/watch?v=rBaV4hk4-M4",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Video available on Youtube"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "board-bring-up---introduction"
  }), `Board Bring Up - Introduction`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "Covers key topics you need to address when doing board bring up for a TouchGFX project.",
    level: "Beginner - Hardware Integrator",
    duration: "55 minutes",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/board-bring-up-introduction/board-bring-up-introduction-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Presentation")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/board-bring-up-introduction/board-bring-up-introduction-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Speaker notes")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://youtu.be/KVRtVtVUZoc",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Video available on Youtube"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-development---introduction"
  }), `Abstraction Layer Development - Introduction`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "Introduces the TouchGFX Abstraction Layer development process. Describes the key responsibilities of the Abstraction Layer and how to use the TouchGFX Generator.",
    level: "Beginner - TouchGFX AL Developers",
    duration: "12 minutes",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/abstraction-layer-development-introduction/abstraction-layer-development-introduction-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Presentation")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/abstraction-layer-development-introduction/abstraction-layer-development-introduction-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Speaker notes")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://youtu.be/zs7YCP8oqXo",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Video available on Youtube"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-development---advanced-topics"
  }), `Abstraction Layer Development - Advanced Topics`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "Dives into advanced topics on TouchGFX Abstration Layer development. Discusses how the TouchGFX AL (generated by TouchGFX Generator) and CubeMX MCU configuration integrate, how to add your own BSP and how TouchGFX is configured manually to support scenarios not configurable in CubeMX.",
    level: "Medium - TouchGFX AL Developers",
    duration: "60 minutes",
    links: "Not available yet.",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---fundamentals"
  }), `UI Development - Fundamentals`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "Introduction to key TouchGFX topics essential for UI development. Covers topics like the UI Application architecture, how to work with TouchGFX Designer during development, using the PC simulator and writing correct and effient user code.",
    level: "Medium - TouchGFX Application Developers",
    duration: "60 minutes",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/ui-development-fundamentals/ui-development-fundamentals-presentation.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Presentation")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/ui-development-fundamentals/ui-development-fundamentals-speakernotes.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Speaker notes")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "https://www.youtube.com/watch?v=rKAIu2zSHU0",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Video available on Youtube"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---using-texts-and-fonts"
  }), `UI Development - Using Texts and Fonts`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "Shows all the details that developers encounters when using texts and fonts in a TouchGFX application.",
    level: "Medium - TouchGFX Application Developers",
    duration: "60 minutes",
    links: "Not available yet.",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---backend-communication"
  }), `UI Development - Backend Communication`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "Explains the suggested way to interface with the non-GUI part of your system and shows examples hereof.",
    level: "Medium - TouchGFX Application Developers",
    duration: "60 minutes",
    links: "Not available yet.",
    mdxType: "PresentationTable"
  })), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "touchgfx-hands-on-workshops"
  }), `TouchGFX Hands-on Workshops`), /* @__PURE__ */ (0,esm/* mdx */.kt)("div", {
    class: "table-with-anchor-header presentation-table"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---getting-started"
  }), `UI Development - Getting Started`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "Introdution to TouchGFX Application Development. Installing tools, creating and modifying your first application.",
    level: "Beginner - TouchGFX Application Developers",
    duration: "60 - 90 minutes",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)("div", null, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-workshop-ui-development-getting-started.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Presentation")), /* @__PURE__ */ (0,esm/* mdx */.kt)("br", null), /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-workshop-ui-development-getting-started-speakers-note.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Speakers note"))),
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "ui-development---fundamentals---hands-on"
  }), `UI Development - Fundamentals - Hands on`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "Covers UI development fundamentals like reacting to user input, changing screen, persisting and restoring data, doing animations and tips and tricks for efficient development.",
    level: "Medium - TouchGFX Application Developers",
    duration: "2 hours",
    links: "Not available yet.",
    mdxType: "PresentationTable"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-development---introduction---hands-on"
  }), `Abstraction Layer Development - Introduction - Hands on`), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_PresentationTable, {
    description: "Introduction to TouchGFX AL development for an STM32H7B3I-DK board using TouchGFX Generator and STM32CubeIDE.",
    level: "Beginner - TouchGFX AL Developers",
    duration: "90 minutes",
    links: /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
      to: "/presentations/resources/touchgfx-workshop-al-development-hands-on.pdf",
      target: "_blank",
      mdxType: "Link"
    }, /* @__PURE__ */ (0,esm/* mdx */.kt)("b", null, "Presentation")),
    mdxType: "PresentationTable"
  })));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);