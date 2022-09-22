(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9081],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 43786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DocBreadcrumbs; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(83631);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(99492);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(3044);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(25026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(33084);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Home/index.js
var __defProp = Object.defineProperty;
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

function IconHome(props) {
  return /* @__PURE__ */ react.createElement("svg", __spreadValues({
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ react.createElement("path", {
    d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
    fill: "currentColor"
  }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_Z_bl","breadcrumbHomeIcon":"breadcrumbHomeIcon_OVgt"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js
var DocBreadcrumbs_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var DocBreadcrumbs_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DocBreadcrumbs_hasOwnProp = Object.prototype.hasOwnProperty;
var DocBreadcrumbs_propIsEnum = Object.prototype.propertyIsEnumerable;
var DocBreadcrumbs_defNormalProp = (obj, key, value) => key in obj ? DocBreadcrumbs_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DocBreadcrumbs_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DocBreadcrumbs_hasOwnProp.call(b, prop))
      DocBreadcrumbs_defNormalProp(a, prop, b[prop]);
  if (DocBreadcrumbs_getOwnPropSymbols)
    for (var prop of DocBreadcrumbs_getOwnPropSymbols(b)) {
      if (DocBreadcrumbs_propIsEnum.call(b, prop))
        DocBreadcrumbs_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));









function BreadcrumbsItemLink({ children, href, isLast }) {
  const className = "breadcrumbs__link";
  if (isLast) {
    return /* @__PURE__ */ react.createElement("span", {
      className,
      itemProp: "name"
    }, children);
  }
  return href ? /* @__PURE__ */ react.createElement(Link/* default */.Z, {
    className,
    href,
    itemProp: "item"
  }, /* @__PURE__ */ react.createElement("span", {
    itemProp: "name"
  }, children)) : /* @__PURE__ */ react.createElement("span", {
    className
  }, children);
}
function BreadcrumbsItem({ children, active, index, addMicrodata }) {
  return /* @__PURE__ */ react.createElement("li", __spreadProps(DocBreadcrumbs_spreadValues({}, addMicrodata && {
    itemScope: true,
    itemProp: "itemListElement",
    itemType: "https://schema.org/ListItem"
  }), {
    className: (0,clsx_m/* default */.Z)("breadcrumbs__item", {
      "breadcrumbs__item--active": active
    })
  }), children, /* @__PURE__ */ react.createElement("meta", {
    itemProp: "position",
    content: String(index + 1)
  }));
}
function HomeBreadcrumbItem() {
  const homeHref = (0,useBaseUrl/* default */.Z)("/");
  return /* @__PURE__ */ react.createElement("li", {
    className: "breadcrumbs__item"
  }, /* @__PURE__ */ react.createElement(Link/* default */.Z, {
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.docs.breadcrumbs.home",
      message: "Home page",
      description: "The ARIA label for the home page in the breadcrumbs"
    }),
    className: (0,clsx_m/* default */.Z)("breadcrumbs__link", styles_module.breadcrumbsItemLink),
    href: homeHref
  }, /* @__PURE__ */ react.createElement(IconHome, {
    className: styles_module.breadcrumbHomeIcon
  })));
}
function DocBreadcrumbs() {
  const breadcrumbs = (0,docsUtils/* useSidebarBreadcrumbs */.s1)();
  const homePageRoute = (0,routesUtils/* useHomePageRoute */.Ns)();
  if (!breadcrumbs) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("nav", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docBreadcrumbs */.k.docs.docBreadcrumbs, styles_module.breadcrumbsContainer),
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.docs.breadcrumbs.navAriaLabel",
      message: "Breadcrumbs",
      description: "The ARIA label for the breadcrumbs"
    })
  }, /* @__PURE__ */ react.createElement("ul", {
    className: "breadcrumbs",
    itemScope: true,
    itemType: "https://schema.org/BreadcrumbList"
  }, homePageRoute && /* @__PURE__ */ react.createElement(HomeBreadcrumbItem, null), breadcrumbs.map((item, idx) => {
    const isLast = idx === breadcrumbs.length - 1;
    return /* @__PURE__ */ react.createElement(BreadcrumbsItem, {
      key: idx,
      active: isLast,
      index: idx,
      addMicrodata: !!item.href
    }, /* @__PURE__ */ react.createElement(BreadcrumbsItemLink, {
      href: item.href,
      isLast
    }, item.label));
  })));
}


/***/ }),

/***/ 89081:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DocItem; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(94469);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(21651);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/doc.js


const Context = react.createContext(null);
function useContextValue(content) {
  return (0,react.useMemo)(() => ({
    metadata: content.metadata,
    frontMatter: content.frontMatter,
    assets: content.assets,
    contentTitle: content.contentTitle,
    toc: content.toc
  }), [content]);
}
function DocProvider({ children, content }) {
  const contextValue = useContextValue(content);
  return /* @__PURE__ */ react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function useDoc() {
  const doc = (0,react.useContext)(Context);
  if (doc === null) {
    throw new reactUtils/* ReactContextError */.i6("DocProvider");
  }
  return doc;
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Metadata/index.js



function DocItemMetadata() {
  var _a;
  const { metadata, frontMatter, assets } = useDoc();
  return /* @__PURE__ */ react.createElement(metadataUtils/* PageMetadata */.d, {
    title: metadata.title,
    description: metadata.description,
    keywords: frontMatter.keywords,
    image: (_a = assets.image) != null ? _a : frontMatter.image
  });
}

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(89078);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js + 1 modules
var DocPaginator = __webpack_require__(30106);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Paginator/index.js



function DocItemPaginator() {
  const { metadata } = useDoc();
  return /* @__PURE__ */ react.createElement(DocPaginator/* default */.Z, {
    previous: metadata.previous,
    next: metadata.next
  });
}

// EXTERNAL MODULE: ./src/theme/DocVersionBanner/index.js
var DocVersionBanner = __webpack_require__(48704);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBadge/index.js
var DocVersionBadge = __webpack_require__(3560);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(83631);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(33084);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/LastUpdated/index.js



function LastUpdatedAtDate({ lastUpdatedAt, formattedLastUpdatedAt }) {
  return /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.lastUpdated.atDate",
    description: "The words used to describe on which date a page has been last updated",
    values: {
      date: /* @__PURE__ */ react.createElement("b", null, /* @__PURE__ */ react.createElement("time", {
        dateTime: new Date(lastUpdatedAt * 1e3).toISOString()
      }, formattedLastUpdatedAt))
    }
  }, " on {date}");
}
function LastUpdatedByUser({ lastUpdatedBy }) {
  return /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.lastUpdated.byUser",
    description: "The words used to describe by who the page has been last updated",
    values: {
      user: /* @__PURE__ */ react.createElement("b", null, lastUpdatedBy)
    }
  }, " by {user}");
}
function LastUpdated({
  lastUpdatedAt,
  formattedLastUpdatedAt,
  lastUpdatedBy
}) {
  return /* @__PURE__ */ react.createElement("span", {
    className: ThemeClassNames/* ThemeClassNames.common.lastUpdated */.k.common.lastUpdated
  }, /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.lastUpdated.lastUpdatedAtBy",
    description: "The sentence used to display when a page has been last updated, and by who",
    values: {
      atDate: lastUpdatedAt && formattedLastUpdatedAt ? /* @__PURE__ */ react.createElement(LastUpdatedAtDate, {
        lastUpdatedAt,
        formattedLastUpdatedAt
      }) : "",
      byUser: lastUpdatedBy ? /* @__PURE__ */ react.createElement(LastUpdatedByUser, {
        lastUpdatedBy
      }) : ""
    }
  }, "Last updated{atDate}{byUser}"),  false && /* @__PURE__ */ 0);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"iconEdit":"iconEdit_Z9Sw"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/index.js
var __defProp = Object.defineProperty;
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



function IconEdit(_a) {
  var _b = _a, { className } = _b, restProps = __objRest(_b, ["className"]);
  return /* @__PURE__ */ react.createElement("svg", __spreadValues({
    fill: "currentColor",
    height: "20",
    width: "20",
    viewBox: "0 0 40 40",
    className: (0,clsx_m/* default */.Z)(styles_module.iconEdit, className),
    "aria-hidden": "true"
  }, restProps), /* @__PURE__ */ react.createElement("g", null, /* @__PURE__ */ react.createElement("path", {
    d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
  })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js




function EditThisPage({ editUrl }) {
  return /* @__PURE__ */ react.createElement("a", {
    href: editUrl,
    target: "_blank",
    rel: "noreferrer noopener",
    className: ThemeClassNames/* ThemeClassNames.common.editThisPage */.k.common.editThisPage
  }, /* @__PURE__ */ react.createElement(IconEdit, null), /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.common.editThisPage",
    description: "The link label to edit the current page"
  }, "Edit this page"));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Tag_styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js




function Tag({ permalink, label, count }) {
  return /* @__PURE__ */ react.createElement(Link/* default */.Z, {
    href: permalink,
    className: (0,clsx_m/* default */.Z)(Tag_styles_module.tag, count ? Tag_styles_module.tagWithCount : Tag_styles_module.tagRegular)
  }, label, count && /* @__PURE__ */ react.createElement("span", null, count));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TagsListInline_styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js





function TagsListInline({ tags }) {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.tags.tagsListLabel",
    description: "The label alongside a tag list"
  }, "Tags:")), /* @__PURE__ */ react.createElement("ul", {
    className: (0,clsx_m/* default */.Z)(TagsListInline_styles_module.tags, "padding--none", "margin-left--sm")
  }, tags.map(({ label, permalink: tagPermalink }) => /* @__PURE__ */ react.createElement("li", {
    key: tagPermalink,
    className: TagsListInline_styles_module.tag
  }, /* @__PURE__ */ react.createElement(Tag, {
    label,
    permalink: tagPermalink
  })))));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Footer/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Footer_styles_module = ({"lastUpdated":"lastUpdated_vwxv"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Footer/index.js
var Footer_defProp = Object.defineProperty;
var Footer_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Footer_hasOwnProp = Object.prototype.hasOwnProperty;
var Footer_propIsEnum = Object.prototype.propertyIsEnumerable;
var Footer_defNormalProp = (obj, key, value) => key in obj ? Footer_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Footer_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Footer_hasOwnProp.call(b, prop))
      Footer_defNormalProp(a, prop, b[prop]);
  if (Footer_getOwnPropSymbols)
    for (var prop of Footer_getOwnPropSymbols(b)) {
      if (Footer_propIsEnum.call(b, prop))
        Footer_defNormalProp(a, prop, b[prop]);
    }
  return a;
};








function TagsRow(props) {
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docFooterTagsRow */.k.docs.docFooterTagsRow, "row margin-bottom--sm")
  }, /* @__PURE__ */ react.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ react.createElement(TagsListInline, Footer_spreadValues({}, props))));
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt
}) {
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docFooterEditMetaRow */.k.docs.docFooterEditMetaRow, "row")
  }, /* @__PURE__ */ react.createElement("div", {
    className: "col"
  }, editUrl && /* @__PURE__ */ react.createElement(EditThisPage, {
    editUrl
  })), /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("col", Footer_styles_module.lastUpdated)
  }, (lastUpdatedAt || lastUpdatedBy) && /* @__PURE__ */ react.createElement(LastUpdated, {
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy
  })));
}
function DocItemFooter() {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("footer", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docFooter */.k.docs.docFooter, "docusaurus-mt-lg")
  }, canDisplayTagsRow && /* @__PURE__ */ react.createElement(TagsRow, {
    tags
  }), canDisplayEditMetaRow && /* @__PURE__ */ react.createElement(EditMetaRow, {
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
    formattedLastUpdatedAt
  }));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(65897);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(57343);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
var tocUtils_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var tocUtils_getOwnPropSymbols = Object.getOwnPropertySymbols;
var tocUtils_hasOwnProp = Object.prototype.hasOwnProperty;
var tocUtils_propIsEnum = Object.prototype.propertyIsEnumerable;
var tocUtils_defNormalProp = (obj, key, value) => key in obj ? tocUtils_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var tocUtils_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (tocUtils_hasOwnProp.call(b, prop))
      tocUtils_defNormalProp(a, prop, b[prop]);
  if (tocUtils_getOwnPropSymbols)
    for (var prop of tocUtils_getOwnPropSymbols(b)) {
      if (tocUtils_propIsEnum.call(b, prop))
        tocUtils_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var tocUtils_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (tocUtils_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && tocUtils_getOwnPropSymbols)
    for (var prop of tocUtils_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && tocUtils_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

function treeifyTOC(flatTOC) {
  const headings = flatTOC.map((heading) => __spreadProps(tocUtils_spreadValues({}, heading), {
    parentIndex: -1,
    children: []
  }));
  const prevIndexForLevel = Array(7).fill(-1);
  headings.forEach((curr, currIndex) => {
    const ancestorLevelIndexes = prevIndexForLevel.slice(2, curr.level);
    curr.parentIndex = Math.max(...ancestorLevelIndexes);
    prevIndexForLevel[curr.level] = currIndex;
  });
  const rootNodes = [];
  headings.forEach((heading) => {
    const _a = heading, { parentIndex } = _a, rest = tocUtils_objRest(_a, ["parentIndex"]);
    if (parentIndex >= 0) {
      headings[parentIndex].children.push(rest);
    } else {
      rootNodes.push(rest);
    }
  });
  return rootNodes;
}
function useTreeifiedTOC(toc) {
  return useMemo(() => treeifyTOC(toc), [toc]);
}
function filterTOC({ toc, minHeadingLevel, maxHeadingLevel }) {
  function isValid(item) {
    return item.level >= minHeadingLevel && item.level <= maxHeadingLevel;
  }
  return toc.flatMap((item) => {
    const filteredChildren = filterTOC({
      toc: item.children,
      minHeadingLevel,
      maxHeadingLevel
    });
    if (isValid(item)) {
      return [
        __spreadProps(tocUtils_spreadValues({}, item), {
          children: filteredChildren
        })
      ];
    }
    return filteredChildren;
  });
}
function useFilteredAndTreeifiedTOC({ toc, minHeadingLevel, maxHeadingLevel }) {
  return (0,react.useMemo)(() => filterTOC({ toc: treeifyTOC(toc), minHeadingLevel, maxHeadingLevel }), [toc, minHeadingLevel, maxHeadingLevel]);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js


function getVisibleBoundingClientRect(element) {
  const rect = element.getBoundingClientRect();
  const hasNoHeight = rect.top === rect.bottom;
  if (hasNoHeight) {
    return getVisibleBoundingClientRect(element.parentNode);
  }
  return rect;
}
function isInViewportTopHalf(boundingRect) {
  return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight / 2;
}
function getAnchors({ minHeadingLevel, maxHeadingLevel }) {
  const selectors = [];
  for (let i = minHeadingLevel; i <= maxHeadingLevel; i += 1) {
    selectors.push(`h${i}.anchor`);
  }
  return Array.from(document.querySelectorAll(selectors.join()));
}
function getActiveAnchor(anchors, { anchorTopOffset }) {
  var _a, _b;
  const nextVisibleAnchor = anchors.find((anchor) => {
    const boundingRect = getVisibleBoundingClientRect(anchor);
    return boundingRect.top >= anchorTopOffset;
  });
  if (nextVisibleAnchor) {
    const boundingRect = getVisibleBoundingClientRect(nextVisibleAnchor);
    if (isInViewportTopHalf(boundingRect)) {
      return nextVisibleAnchor;
    }
    return (_a = anchors[anchors.indexOf(nextVisibleAnchor) - 1]) != null ? _a : null;
  }
  return (_b = anchors[anchors.length - 1]) != null ? _b : null;
}
function getLinkAnchorValue(link) {
  return decodeURIComponent(link.href.substring(link.href.indexOf("#") + 1));
}
function getLinks(linkClassName) {
  return Array.from(document.getElementsByClassName(linkClassName));
}
function getNavbarHeight() {
  return document.querySelector(".navbar").clientHeight;
}
function useAnchorTopOffsetRef() {
  const anchorTopOffsetRef = (0,react.useRef)(0);
  const { navbar: { hideOnScroll } } = (0,useThemeConfig/* useThemeConfig */.L)();
  (0,react.useEffect)(() => {
    anchorTopOffsetRef.current = hideOnScroll ? 0 : getNavbarHeight();
  }, [hideOnScroll]);
  return anchorTopOffsetRef;
}
function useTOCHighlight(config) {
  const lastActiveLinkRef = (0,react.useRef)(void 0);
  const anchorTopOffsetRef = useAnchorTopOffsetRef();
  (0,react.useEffect)(() => {
    if (!config) {
      return () => {
      };
    }
    const { linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel } = config;
    function updateLinkActiveClass(link, active) {
      if (active) {
        if (lastActiveLinkRef.current && lastActiveLinkRef.current !== link) {
          lastActiveLinkRef.current.classList.remove(linkActiveClassName);
        }
        link.classList.add(linkActiveClassName);
        lastActiveLinkRef.current = link;
      } else {
        link.classList.remove(linkActiveClassName);
      }
    }
    function updateActiveLink() {
      const links = getLinks(linkClassName);
      const anchors = getAnchors({ minHeadingLevel, maxHeadingLevel });
      const activeAnchor = getActiveAnchor(anchors, {
        anchorTopOffset: anchorTopOffsetRef.current
      });
      const activeLink = links.find((link) => activeAnchor && activeAnchor.id === getLinkAnchorValue(link));
      links.forEach((link) => {
        updateLinkActiveClass(link, link === activeLink);
      });
    }
    document.addEventListener("scroll", updateActiveLink);
    document.addEventListener("resize", updateActiveLink);
    updateActiveLink();
    return () => {
      document.removeEventListener("scroll", updateActiveLink);
      document.removeEventListener("resize", updateActiveLink);
    };
  }, [config, anchorTopOffsetRef]);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js

function TOCItemTree({ toc, className, linkClassName, isChild }) {
  if (!toc.length) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("ul", {
    className: isChild ? void 0 : className
  }, toc.map((heading) => /* @__PURE__ */ react.createElement("li", {
    key: heading.id
  }, /* @__PURE__ */ react.createElement("a", {
    href: `#${heading.id}`,
    className: linkClassName != null ? linkClassName : void 0,
    dangerouslySetInnerHTML: { __html: heading.value }
  }), /* @__PURE__ */ react.createElement(TOCItemTree, {
    isChild: true,
    toc: heading.children,
    className,
    linkClassName
  }))));
}
/* harmony default export */ var Tree = (react.memo(TOCItemTree));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
var TOCItems_defProp = Object.defineProperty;
var TOCItems_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TOCItems_hasOwnProp = Object.prototype.hasOwnProperty;
var TOCItems_propIsEnum = Object.prototype.propertyIsEnumerable;
var TOCItems_defNormalProp = (obj, key, value) => key in obj ? TOCItems_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TOCItems_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TOCItems_hasOwnProp.call(b, prop))
      TOCItems_defNormalProp(a, prop, b[prop]);
  if (TOCItems_getOwnPropSymbols)
    for (var prop of TOCItems_getOwnPropSymbols(b)) {
      if (TOCItems_propIsEnum.call(b, prop))
        TOCItems_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var TOCItems_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (TOCItems_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && TOCItems_getOwnPropSymbols)
    for (var prop of TOCItems_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && TOCItems_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




function TOCItems(_a) {
  var _b = _a, {
    toc,
    className = "table-of-contents table-of-contents__left-border",
    linkClassName = "table-of-contents__link",
    linkActiveClassName = void 0,
    minHeadingLevel: minHeadingLevelOption,
    maxHeadingLevel: maxHeadingLevelOption
  } = _b, props = TOCItems_objRest(_b, [
    "toc",
    "className",
    "linkClassName",
    "linkActiveClassName",
    "minHeadingLevel",
    "maxHeadingLevel"
  ]);
  const themeConfig = (0,useThemeConfig/* useThemeConfig */.L)();
  const minHeadingLevel = minHeadingLevelOption != null ? minHeadingLevelOption : themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel = maxHeadingLevelOption != null ? maxHeadingLevelOption : themeConfig.tableOfContents.maxHeadingLevel;
  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel
  });
  const tocHighlightConfig = (0,react.useMemo)(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
      };
    }
    return void 0;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);
  useTOCHighlight(tocHighlightConfig);
  return /* @__PURE__ */ react.createElement(Tree, TOCItems_spreadValues({
    toc: tocTree,
    className,
    linkClassName
  }, props));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var CollapseButton_styles_module = ({"tocCollapsibleButton":"tocCollapsibleButton_TO0P","tocCollapsibleButtonExpanded":"tocCollapsibleButtonExpanded_MG3E"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/index.js
var CollapseButton_defProp = Object.defineProperty;
var CollapseButton_defProps = Object.defineProperties;
var CollapseButton_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var CollapseButton_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CollapseButton_hasOwnProp = Object.prototype.hasOwnProperty;
var CollapseButton_propIsEnum = Object.prototype.propertyIsEnumerable;
var CollapseButton_defNormalProp = (obj, key, value) => key in obj ? CollapseButton_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CollapseButton_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CollapseButton_hasOwnProp.call(b, prop))
      CollapseButton_defNormalProp(a, prop, b[prop]);
  if (CollapseButton_getOwnPropSymbols)
    for (var prop of CollapseButton_getOwnPropSymbols(b)) {
      if (CollapseButton_propIsEnum.call(b, prop))
        CollapseButton_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var CollapseButton_spreadProps = (a, b) => CollapseButton_defProps(a, CollapseButton_getOwnPropDescs(b));
var CollapseButton_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (CollapseButton_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && CollapseButton_getOwnPropSymbols)
    for (var prop of CollapseButton_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && CollapseButton_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




function TOCCollapsibleCollapseButton(_a) {
  var _b = _a, { collapsed } = _b, props = CollapseButton_objRest(_b, ["collapsed"]);
  return /* @__PURE__ */ react.createElement("button", CollapseButton_spreadProps(CollapseButton_spreadValues({
    type: "button"
  }, props), {
    className: (0,clsx_m/* default */.Z)("clean-btn", CollapseButton_styles_module.tocCollapsibleButton, !collapsed && CollapseButton_styles_module.tocCollapsibleButtonExpanded, props.className)
  }), /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
    id: "theme.TOCCollapsible.toggleButtonLabel",
    description: "The label used by the button on the collapsible TOC component"
  }, "On this page"));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TOCCollapsible_styles_module = ({"tocCollapsible":"tocCollapsible_ETCw","tocCollapsibleContent":"tocCollapsibleContent_vkbj","tocCollapsibleExpanded":"tocCollapsibleExpanded_sAul"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js






function TOCCollapsible({
  toc,
  className,
  minHeadingLevel,
  maxHeadingLevel
}) {
  const { collapsed, toggleCollapsed } = (0,Collapsible/* useCollapsible */.u)({
    initialState: true
  });
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(TOCCollapsible_styles_module.tocCollapsible, !collapsed && TOCCollapsible_styles_module.tocCollapsibleExpanded, className)
  }, /* @__PURE__ */ react.createElement(TOCCollapsibleCollapseButton, {
    collapsed,
    onClick: toggleCollapsed
  }), /* @__PURE__ */ react.createElement(Collapsible/* Collapsible */.z, {
    lazy: true,
    className: TOCCollapsible_styles_module.tocCollapsibleContent,
    collapsed
  }, /* @__PURE__ */ react.createElement(TOCItems, {
    toc,
    minHeadingLevel,
    maxHeadingLevel
  })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Mobile_styles_module = ({"tocMobile":"tocMobile_ITEo"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/index.js






function DocItemTOCMobile() {
  const { toc, frontMatter } = useDoc();
  return /* @__PURE__ */ react.createElement(TOCCollapsible, {
    toc,
    minHeadingLevel: frontMatter.toc_min_heading_level,
    maxHeadingLevel: frontMatter.toc_max_heading_level,
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docTocMobile */.k.docs.docTocMobile, Mobile_styles_module.tocMobile)
  });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TOC_styles_module = ({"tableOfContents":"tableOfContents_bqdL","docItemContainer":"docItemContainer_F8PC"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
var TOC_defProp = Object.defineProperty;
var TOC_defProps = Object.defineProperties;
var TOC_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TOC_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TOC_hasOwnProp = Object.prototype.hasOwnProperty;
var TOC_propIsEnum = Object.prototype.propertyIsEnumerable;
var TOC_defNormalProp = (obj, key, value) => key in obj ? TOC_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TOC_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TOC_hasOwnProp.call(b, prop))
      TOC_defNormalProp(a, prop, b[prop]);
  if (TOC_getOwnPropSymbols)
    for (var prop of TOC_getOwnPropSymbols(b)) {
      if (TOC_propIsEnum.call(b, prop))
        TOC_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var TOC_spreadProps = (a, b) => TOC_defProps(a, TOC_getOwnPropDescs(b));
var TOC_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (TOC_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && TOC_getOwnPropSymbols)
    for (var prop of TOC_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && TOC_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";
function TOC(_a) {
  var _b = _a, { className } = _b, props = TOC_objRest(_b, ["className"]);
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(TOC_styles_module.tableOfContents, "thin-scrollbar", className)
  }, /* @__PURE__ */ react.createElement(TOCItems, TOC_spreadProps(TOC_spreadValues({}, props), {
    linkClassName: LINK_CLASS_NAME,
    linkActiveClassName: LINK_ACTIVE_CLASS_NAME
  })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Desktop/index.js




function DocItemTOCDesktop() {
  const { toc, frontMatter } = useDoc();
  return /* @__PURE__ */ react.createElement(TOC, {
    toc,
    minHeadingLevel: frontMatter.toc_min_heading_level,
    maxHeadingLevel: frontMatter.toc_max_heading_level,
    className: ThemeClassNames/* ThemeClassNames.docs.docTocDesktop */.k.docs.docTocDesktop
  });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(55199);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(68333);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Head.js
var Head_defProp = Object.defineProperty;
var Head_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Head_hasOwnProp = Object.prototype.hasOwnProperty;
var Head_propIsEnum = Object.prototype.propertyIsEnumerable;
var Head_defNormalProp = (obj, key, value) => key in obj ? Head_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Head_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Head_hasOwnProp.call(b, prop))
      Head_defNormalProp(a, prop, b[prop]);
  if (Head_getOwnPropSymbols)
    for (var prop of Head_getOwnPropSymbols(b)) {
      if (Head_propIsEnum.call(b, prop))
        Head_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Head_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Head_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Head_getOwnPropSymbols)
    for (var prop of Head_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Head_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};


function unwrapMDXElement(element) {
  var _a;
  if (((_a = element.props) == null ? void 0 : _a.mdxType) && element.props.originalType) {
    const _b = element.props, { mdxType, originalType } = _b, newProps = Head_objRest(_b, ["mdxType", "originalType"]);
    return react.createElement(element.props.originalType, newProps);
  }
  return element;
}
function MDXHead(props) {
  const unwrappedChildren = react.Children.map(props.children, (child) => react.isValidElement(child) ? unwrapMDXElement(child) : child);
  return /* @__PURE__ */ react.createElement(Head/* default */.Z, Head_spreadValues({}, props), unwrappedChildren);
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(54939);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(97353);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js


function usePrismTheme() {
  const { prism } = (0,useThemeConfig/* useThemeConfig */.L)();
  const { colorMode } = (0,contexts_colorMode/* useColorMode */.I)();
  const lightModeTheme = prism.theme;
  const darkModeTheme = prism.darkTheme || lightModeTheme;
  const prismTheme = colorMode === "dark" ? darkModeTheme : lightModeTheme;
  return prismTheme;
}

// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(87594);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js

const codeBlockTitleRegex = /title=(?<quote>["'])(?<title>.*?)\1/;
const metastringLinesRangeRegex = /\{(?<range>[\d,-]+)\}/;
const commentPatterns = {
  js: { start: "\\/\\/", end: "" },
  jsBlock: { start: "\\/\\*", end: "\\*\\/" },
  jsx: { start: "\\{\\s*\\/\\*", end: "\\*\\/\\s*\\}" },
  bash: { start: "#", end: "" },
  html: { start: "<!--", end: "-->" }
};
function getCommentPattern(languages, magicCommentDirectives) {
  const commentPattern = languages.map((lang) => {
    const { start, end } = commentPatterns[lang];
    return `(?:${start}\\s*(${magicCommentDirectives.flatMap((d) => {
      var _a, _b;
      return [d.line, (_a = d.block) == null ? void 0 : _a.start, (_b = d.block) == null ? void 0 : _b.end].filter(Boolean);
    }).join("|")})\\s*${end})`;
  }).join("|");
  return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
}
function getAllMagicCommentDirectiveStyles(lang, magicCommentDirectives) {
  switch (lang) {
    case "js":
    case "javascript":
    case "ts":
    case "typescript":
      return getCommentPattern(["js", "jsBlock"], magicCommentDirectives);
    case "jsx":
    case "tsx":
      return getCommentPattern(["js", "jsBlock", "jsx"], magicCommentDirectives);
    case "html":
      return getCommentPattern(["js", "jsBlock", "html"], magicCommentDirectives);
    case "python":
    case "py":
    case "bash":
      return getCommentPattern(["bash"], magicCommentDirectives);
    case "markdown":
    case "md":
      return getCommentPattern(["html", "jsx", "bash"], magicCommentDirectives);
    default:
      return getCommentPattern(Object.keys(commentPatterns), magicCommentDirectives);
  }
}
function parseCodeBlockTitle(metastring) {
  var _a, _b;
  return (_b = (_a = metastring == null ? void 0 : metastring.match(codeBlockTitleRegex)) == null ? void 0 : _a.groups.title) != null ? _b : "";
}
function containsLineNumbers(metastring) {
  return Boolean(metastring == null ? void 0 : metastring.includes("showLineNumbers"));
}
function parseLanguage(className) {
  const languageClassName = className.split(" ").find((str) => str.startsWith("language-"));
  return languageClassName == null ? void 0 : languageClassName.replace(/language-/, "");
}
function parseLines(content, options) {
  let code = content.replace(/\n$/, "");
  const { language, magicComments, metastring } = options;
  if (metastring && metastringLinesRangeRegex.test(metastring)) {
    const linesRange = metastring.match(metastringLinesRangeRegex).groups.range;
    if (magicComments.length === 0) {
      throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
    }
    const metastringRangeClassName = magicComments[0].className;
    const lines2 = parse_numeric_range_default()(linesRange).filter((n) => n > 0).map((n) => [n - 1, [metastringRangeClassName]]);
    return { lineClassNames: Object.fromEntries(lines2), code };
  }
  if (language === void 0) {
    return { lineClassNames: {}, code };
  }
  const directiveRegex = getAllMagicCommentDirectiveStyles(language, magicComments);
  const lines = code.split("\n");
  const blocks = Object.fromEntries(magicComments.map((d) => [d.className, { start: 0, range: "" }]));
  const lineToClassName = Object.fromEntries(magicComments.filter((d) => d.line).map(({ className, line }) => [line, className]));
  const blockStartToClassName = Object.fromEntries(magicComments.filter((d) => d.block).map(({ className, block }) => [block.start, className]));
  const blockEndToClassName = Object.fromEntries(magicComments.filter((d) => d.block).map(({ className, block }) => [block.end, className]));
  for (let lineNumber = 0; lineNumber < lines.length; ) {
    const line = lines[lineNumber];
    const match = line.match(directiveRegex);
    if (!match) {
      lineNumber += 1;
      continue;
    }
    const directive = match.slice(1).find((item) => item !== void 0);
    if (lineToClassName[directive]) {
      blocks[lineToClassName[directive]].range += `${lineNumber},`;
    } else if (blockStartToClassName[directive]) {
      blocks[blockStartToClassName[directive]].start = lineNumber;
    } else if (blockEndToClassName[directive]) {
      blocks[blockEndToClassName[directive]].range += `${blocks[blockEndToClassName[directive]].start}-${lineNumber - 1},`;
    }
    lines.splice(lineNumber, 1);
  }
  code = lines.join("\n");
  const lineClassNames = {};
  Object.entries(blocks).forEach(([className, { range }]) => {
    parse_numeric_range_default()(range).forEach((l) => {
      var _a;
      (_a = lineClassNames[l]) != null ? _a : lineClassNames[l] = [];
      lineClassNames[l].push(className);
    });
  });
  return { lineClassNames, code };
}
function getPrismCssVariables(prismTheme) {
  const mapping = {
    color: "--prism-color",
    backgroundColor: "--prism-background-color"
  };
  const properties = {};
  Object.entries(prismTheme.plain).forEach(([key, value]) => {
    const varName = mapping[key];
    if (varName && typeof value === "string") {
      properties[varName] = value;
    }
  });
  return properties;
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Container_styles_module = ({"codeBlockContainer":"codeBlockContainer_Ckt0"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js
var Container_defProp = Object.defineProperty;
var Container_defProps = Object.defineProperties;
var Container_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Container_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Container_hasOwnProp = Object.prototype.hasOwnProperty;
var Container_propIsEnum = Object.prototype.propertyIsEnumerable;
var Container_defNormalProp = (obj, key, value) => key in obj ? Container_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Container_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Container_hasOwnProp.call(b, prop))
      Container_defNormalProp(a, prop, b[prop]);
  if (Container_getOwnPropSymbols)
    for (var prop of Container_getOwnPropSymbols(b)) {
      if (Container_propIsEnum.call(b, prop))
        Container_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Container_spreadProps = (a, b) => Container_defProps(a, Container_getOwnPropDescs(b));
var Container_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Container_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Container_getOwnPropSymbols)
    for (var prop of Container_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Container_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





function CodeBlockContainer(_a) {
  var _b = _a, { as: As } = _b, props = Container_objRest(_b, ["as"]);
  const prismTheme = usePrismTheme();
  const prismCssVariables = getPrismCssVariables(prismTheme);
  return /* @__PURE__ */ react.createElement(As, Container_spreadProps(Container_spreadValues({}, props), {
    style: prismCssVariables,
    className: (0,clsx_m/* default */.Z)(props.className, Container_styles_module.codeBlockContainer, ThemeClassNames/* ThemeClassNames.common.codeBlock */.k.common.codeBlock)
  }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Content_styles_module = ({"codeBlockContent":"codeBlockContent_biex","codeBlockTitle":"codeBlockTitle_Ktv7","codeBlock":"codeBlock_bY9V","codeBlockStandalone":"codeBlockStandalone_MEMb","codeBlockLines":"codeBlockLines_e6Vv","codeBlockLinesWithNumbering":"codeBlockLinesWithNumbering_o6Pm","buttonGroup":"buttonGroup__atx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js




function CodeBlockJSX({ children, className }) {
  return /* @__PURE__ */ react.createElement(CodeBlockContainer, {
    as: "pre",
    tabIndex: 0,
    className: (0,clsx_m/* default */.Z)(Content_styles_module.codeBlockStandalone, "thin-scrollbar", className)
  }, /* @__PURE__ */ react.createElement("code", {
    className: Content_styles_module.codeBlockLines
  }, children));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useMutationObserver.js


const DefaultOptions = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true
};
function useMutationObserver(target, callback, options = DefaultOptions) {
  const stableCallback = (0,reactUtils/* useEvent */.zX)(callback);
  const stableOptions = (0,reactUtils/* useShallowMemoObject */.Ql)(options);
  (0,react.useEffect)(() => {
    const observer = new MutationObserver(stableCallback);
    if (target) {
      observer.observe(target, stableOptions);
    }
    return () => observer.disconnect();
  }, [target, stableCallback, stableOptions]);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useCodeWordWrap.js


function useTabBecameVisibleCallback(codeBlockRef, callback) {
  const [hiddenTabElement, setHiddenTabElement] = (0,react.useState)();
  const updateHiddenTabElement = (0,react.useCallback)(() => {
    var _a;
    setHiddenTabElement((_a = codeBlockRef.current) == null ? void 0 : _a.closest("[role=tabpanel][hidden]"));
  }, [codeBlockRef, setHiddenTabElement]);
  (0,react.useEffect)(() => {
    updateHiddenTabElement();
  }, [updateHiddenTabElement]);
  useMutationObserver(hiddenTabElement, (mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "hidden") {
        callback();
        updateHiddenTabElement();
      }
    });
  }, {
    attributes: true,
    characterData: false,
    childList: false,
    subtree: false
  });
}
function useCodeWordWrap() {
  const [isEnabled, setIsEnabled] = (0,react.useState)(false);
  const [isCodeScrollable, setIsCodeScrollable] = (0,react.useState)(false);
  const codeBlockRef = (0,react.useRef)(null);
  const toggle = (0,react.useCallback)(() => {
    const codeElement = codeBlockRef.current.querySelector("code");
    if (isEnabled) {
      codeElement.removeAttribute("style");
    } else {
      codeElement.style.whiteSpace = "pre-wrap";
      codeElement.style.overflowWrap = "anywhere";
    }
    setIsEnabled((value) => !value);
  }, [codeBlockRef, isEnabled]);
  const updateCodeIsScrollable = (0,react.useCallback)(() => {
    const { scrollWidth, clientWidth } = codeBlockRef.current;
    const isScrollable = scrollWidth > clientWidth || codeBlockRef.current.querySelector("code").hasAttribute("style");
    setIsCodeScrollable(isScrollable);
  }, [codeBlockRef]);
  useTabBecameVisibleCallback(codeBlockRef, updateCodeIsScrollable);
  (0,react.useEffect)(() => {
    updateCodeIsScrollable();
  }, [isEnabled, updateCodeIsScrollable]);
  (0,react.useEffect)(() => {
    window.addEventListener("resize", updateCodeIsScrollable, {
      passive: true
    });
    return () => {
      window.removeEventListener("resize", updateCodeIsScrollable);
    };
  }, [updateCodeIsScrollable]);
  return { codeBlockRef, isEnabled, isCodeScrollable, toggle };
}

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(87410);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ var duotoneDark = (theme);

;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism/* default */.Z,
  theme: duotoneDark
};

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

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ var dist = (Highlight);


;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Line_styles_module = ({"codeLine":"codeLine_lJS_","codeLineNumber":"codeLineNumber_Tfdd","codeLineContent":"codeLineContent_feaV"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/index.js
var Line_defProp = Object.defineProperty;
var Line_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Line_hasOwnProp = Object.prototype.hasOwnProperty;
var Line_propIsEnum = Object.prototype.propertyIsEnumerable;
var Line_defNormalProp = (obj, key, value) => key in obj ? Line_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Line_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Line_hasOwnProp.call(b, prop))
      Line_defNormalProp(a, prop, b[prop]);
  if (Line_getOwnPropSymbols)
    for (var prop of Line_getOwnPropSymbols(b)) {
      if (Line_propIsEnum.call(b, prop))
        Line_defNormalProp(a, prop, b[prop]);
    }
  return a;
};



function CodeBlockLine({
  line,
  classNames,
  showLineNumbers,
  getLineProps,
  getTokenProps
}) {
  if (line.length === 1 && line[0].content === "\n") {
    line[0].content = "";
  }
  const lineProps = getLineProps({
    line,
    className: (0,clsx_m/* default */.Z)(classNames, showLineNumbers && Line_styles_module.codeLine)
  });
  const lineTokens = line.map((token, key) => /* @__PURE__ */ react.createElement("span", Line_spreadValues({
    key
  }, getTokenProps({ token, key }))));
  return /* @__PURE__ */ react.createElement("span", Line_spreadValues({}, lineProps), showLineNumbers ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("span", {
    className: Line_styles_module.codeLineNumber
  }), /* @__PURE__ */ react.createElement("span", {
    className: Line_styles_module.codeLineContent
  }, lineTokens)) : /* @__PURE__ */ react.createElement(react.Fragment, null, lineTokens, /* @__PURE__ */ react.createElement("br", null)));
}

;// CONCATENATED MODULE: ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(input, {target = document.body} = {}) {
	const element = document.createElement('textarea');
	const previouslyFocusedElement = document.activeElement;

	element.value = input;

	// Prevent keyboard from showing on mobile
	element.setAttribute('readonly', '');

	element.style.contain = 'strict';
	element.style.position = 'absolute';
	element.style.left = '-9999px';
	element.style.fontSize = '12pt'; // Prevent zooming on iOS

	const selection = document.getSelection();
	let originalRange = false;
	if (selection.rangeCount > 0) {
		originalRange = selection.getRangeAt(0);
	}

	target.append(element);
	element.select();

	// Explicit selection workaround for iOS
	element.selectionStart = 0;
	element.selectionEnd = input.length;

	let isSuccess = false;
	try {
		isSuccess = document.execCommand('copy');
	} catch {}

	element.remove();

	if (originalRange) {
		selection.removeAllRanges();
		selection.addRange(originalRange);
	}

	// Get the focus back on the previously focused element, if any
	if (previouslyFocusedElement) {
		previouslyFocusedElement.focus();
	}

	return isSuccess;
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var CopyButton_styles_module = ({"copyButtonCopied":"copyButtonCopied_obH4","copyButtonIcons":"copyButtonIcons_eSgA","copyButtonIcon":"copyButtonIcon_y97N","copyButtonSuccessIcon":"copyButtonSuccessIcon_LjdS"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/index.js





function CopyButton({ code, className }) {
  const [isCopied, setIsCopied] = (0,react.useState)(false);
  const copyTimeout = (0,react.useRef)(void 0);
  const handleCopyCode = (0,react.useCallback)(() => {
    copyTextToClipboard(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1e3);
  }, [code]);
  (0,react.useEffect)(() => () => window.clearTimeout(copyTimeout.current), []);
  return /* @__PURE__ */ react.createElement("button", {
    type: "button",
    "aria-label": isCopied ? (0,Translate/* translate */.I)({
      id: "theme.CodeBlock.copied",
      message: "Copied",
      description: "The copied button label on code blocks"
    }) : (0,Translate/* translate */.I)({
      id: "theme.CodeBlock.copyButtonAriaLabel",
      message: "Copy code to clipboard",
      description: "The ARIA label for copy code blocks button"
    }),
    title: (0,Translate/* translate */.I)({
      id: "theme.CodeBlock.copy",
      message: "Copy",
      description: "The copy button label on code blocks"
    }),
    className: (0,clsx_m/* default */.Z)("clean-btn", className, CopyButton_styles_module.copyButton, isCopied && CopyButton_styles_module.copyButtonCopied),
    onClick: handleCopyCode
  }, /* @__PURE__ */ react.createElement("span", {
    className: CopyButton_styles_module.copyButtonIcons,
    "aria-hidden": "true"
  }, /* @__PURE__ */ react.createElement("svg", {
    className: CopyButton_styles_module.copyButtonIcon,
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ react.createElement("path", {
    d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
  })), /* @__PURE__ */ react.createElement("svg", {
    className: CopyButton_styles_module.copyButtonSuccessIcon,
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ react.createElement("path", {
    d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
  }))));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var WordWrapButton_styles_module = ({"wordWrapButtonIcon":"wordWrapButtonIcon_Bwma","wordWrapButtonEnabled":"wordWrapButtonEnabled_EoeP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/index.js




function WordWrapButton({ className, onClick, isEnabled }) {
  const title = (0,Translate/* translate */.I)({
    id: "theme.CodeBlock.wordWrapToggle",
    message: "Toggle word wrap",
    description: "The title attribute for toggle word wrapping button of code block lines"
  });
  return /* @__PURE__ */ react.createElement("button", {
    type: "button",
    onClick,
    className: (0,clsx_m/* default */.Z)("clean-btn", className, isEnabled && WordWrapButton_styles_module.wordWrapButtonEnabled),
    "aria-label": title,
    title
  }, /* @__PURE__ */ react.createElement("svg", {
    className: WordWrapButton_styles_module.wordWrapButtonIcon,
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ react.createElement("path", {
    fill: "currentColor",
    d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
  })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/String.js
var String_defProp = Object.defineProperty;
var String_defProps = Object.defineProperties;
var String_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var String_getOwnPropSymbols = Object.getOwnPropertySymbols;
var String_hasOwnProp = Object.prototype.hasOwnProperty;
var String_propIsEnum = Object.prototype.propertyIsEnumerable;
var String_defNormalProp = (obj, key, value) => key in obj ? String_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var String_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (String_hasOwnProp.call(b, prop))
      String_defNormalProp(a, prop, b[prop]);
  if (String_getOwnPropSymbols)
    for (var prop of String_getOwnPropSymbols(b)) {
      if (String_propIsEnum.call(b, prop))
        String_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var String_spreadProps = (a, b) => String_defProps(a, String_getOwnPropDescs(b));










function CodeBlockString({
  children,
  className: blockClassName = "",
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp
}) {
  var _a;
  const {
    prism: { defaultLanguage, magicComments }
  } = (0,useThemeConfig/* useThemeConfig */.L)();
  const language = (_a = languageProp != null ? languageProp : parseLanguage(blockClassName)) != null ? _a : defaultLanguage;
  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();
  const title = parseCodeBlockTitle(metastring) || titleProp;
  const { lineClassNames, code } = parseLines(children, {
    metastring,
    language,
    magicComments
  });
  const showLineNumbers = showLineNumbersProp != null ? showLineNumbersProp : containsLineNumbers(metastring);
  return /* @__PURE__ */ react.createElement(CodeBlockContainer, {
    as: "div",
    className: (0,clsx_m/* default */.Z)(blockClassName, language && !blockClassName.includes(`language-${language}`) && `language-${language}`)
  }, title && /* @__PURE__ */ react.createElement("div", {
    className: Content_styles_module.codeBlockTitle
  }, title), /* @__PURE__ */ react.createElement("div", {
    className: Content_styles_module.codeBlockContent
  }, /* @__PURE__ */ react.createElement(dist, String_spreadProps(String_spreadValues({}, defaultProps), {
    theme: prismTheme,
    code,
    language: language != null ? language : "text"
  }), ({ className, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ react.createElement("pre", {
    tabIndex: 0,
    ref: wordWrap.codeBlockRef,
    className: (0,clsx_m/* default */.Z)(className, Content_styles_module.codeBlock, "thin-scrollbar")
  }, /* @__PURE__ */ react.createElement("code", {
    className: (0,clsx_m/* default */.Z)(Content_styles_module.codeBlockLines, showLineNumbers && Content_styles_module.codeBlockLinesWithNumbering)
  }, tokens.map((line, i) => /* @__PURE__ */ react.createElement(CodeBlockLine, {
    key: i,
    line,
    getLineProps,
    getTokenProps,
    classNames: lineClassNames[i],
    showLineNumbers
  }))))), /* @__PURE__ */ react.createElement("div", {
    className: Content_styles_module.buttonGroup
  }, (wordWrap.isEnabled || wordWrap.isCodeScrollable) && /* @__PURE__ */ react.createElement(WordWrapButton, {
    className: Content_styles_module.codeButton,
    onClick: () => wordWrap.toggle(),
    isEnabled: wordWrap.isEnabled
  }), /* @__PURE__ */ react.createElement(CopyButton, {
    className: Content_styles_module.codeButton,
    code
  }))));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js
var CodeBlock_defProp = Object.defineProperty;
var CodeBlock_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CodeBlock_hasOwnProp = Object.prototype.hasOwnProperty;
var CodeBlock_propIsEnum = Object.prototype.propertyIsEnumerable;
var CodeBlock_defNormalProp = (obj, key, value) => key in obj ? CodeBlock_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CodeBlock_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CodeBlock_hasOwnProp.call(b, prop))
      CodeBlock_defNormalProp(a, prop, b[prop]);
  if (CodeBlock_getOwnPropSymbols)
    for (var prop of CodeBlock_getOwnPropSymbols(b)) {
      if (CodeBlock_propIsEnum.call(b, prop))
        CodeBlock_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var CodeBlock_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (CodeBlock_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && CodeBlock_getOwnPropSymbols)
    for (var prop of CodeBlock_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && CodeBlock_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




function maybeStringifyChildren(children) {
  if (react.Children.toArray(children).some((el) => (0,react.isValidElement)(el))) {
    return children;
  }
  return Array.isArray(children) ? children.join("") : children;
}
function CodeBlock(_a) {
  var _b = _a, { children: rawChildren } = _b, props = CodeBlock_objRest(_b, ["children"]);
  const isBrowser = (0,useIsBrowser/* default */.Z)();
  const children = maybeStringifyChildren(rawChildren);
  const CodeBlockComp = typeof children === "string" ? CodeBlockString : CodeBlockJSX;
  return /* @__PURE__ */ react.createElement(CodeBlockComp, CodeBlock_spreadValues({
    key: String(isBrowser)
  }, props), children);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Code.js
var Code_defProp = Object.defineProperty;
var Code_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Code_hasOwnProp = Object.prototype.hasOwnProperty;
var Code_propIsEnum = Object.prototype.propertyIsEnumerable;
var Code_defNormalProp = (obj, key, value) => key in obj ? Code_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Code_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Code_hasOwnProp.call(b, prop))
      Code_defNormalProp(a, prop, b[prop]);
  if (Code_getOwnPropSymbols)
    for (var prop of Code_getOwnPropSymbols(b)) {
      if (Code_propIsEnum.call(b, prop))
        Code_defNormalProp(a, prop, b[prop]);
    }
  return a;
};


function MDXCode(props) {
  const inlineElements = [
    "a",
    "b",
    "big",
    "i",
    "span",
    "em",
    "strong",
    "sup",
    "sub",
    "small"
  ];
  const shouldBeInline = react.Children.toArray(props.children).every((el) => {
    var _a;
    return typeof el === "string" && !el.includes("\n") || (0,react.isValidElement)(el) && inlineElements.includes((_a = el.props) == null ? void 0 : _a.mdxType);
  });
  return shouldBeInline ? /* @__PURE__ */ react.createElement("code", Code_spreadValues({}, props)) : /* @__PURE__ */ react.createElement(CodeBlock, Code_spreadValues({}, props));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/A.js
var A_defProp = Object.defineProperty;
var A_getOwnPropSymbols = Object.getOwnPropertySymbols;
var A_hasOwnProp = Object.prototype.hasOwnProperty;
var A_propIsEnum = Object.prototype.propertyIsEnumerable;
var A_defNormalProp = (obj, key, value) => key in obj ? A_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var A_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (A_hasOwnProp.call(b, prop))
      A_defNormalProp(a, prop, b[prop]);
  if (A_getOwnPropSymbols)
    for (var prop of A_getOwnPropSymbols(b)) {
      if (A_propIsEnum.call(b, prop))
        A_defNormalProp(a, prop, b[prop]);
    }
  return a;
};


function MDXA(props) {
  return /* @__PURE__ */ react.createElement(Link/* default */.Z, A_spreadValues({}, props));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Pre.js
var Pre_defProp = Object.defineProperty;
var Pre_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Pre_hasOwnProp = Object.prototype.hasOwnProperty;
var Pre_propIsEnum = Object.prototype.propertyIsEnumerable;
var Pre_defNormalProp = (obj, key, value) => key in obj ? Pre_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Pre_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Pre_hasOwnProp.call(b, prop))
      Pre_defNormalProp(a, prop, b[prop]);
  if (Pre_getOwnPropSymbols)
    for (var prop of Pre_getOwnPropSymbols(b)) {
      if (Pre_propIsEnum.call(b, prop))
        Pre_defNormalProp(a, prop, b[prop]);
    }
  return a;
};


function MDXPre(props) {
  var _a;
  return /* @__PURE__ */ react.createElement(CodeBlock, Pre_spreadValues({}, (0,react.isValidElement)(props.children) && ((_a = props.children.props) == null ? void 0 : _a.originalType) === "code" ? props.children.props : Pre_spreadValues({}, props)));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Details_styles_module = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
var Details_defProp = Object.defineProperty;
var Details_defProps = Object.defineProperties;
var Details_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Details_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Details_hasOwnProp = Object.prototype.hasOwnProperty;
var Details_propIsEnum = Object.prototype.propertyIsEnumerable;
var Details_defNormalProp = (obj, key, value) => key in obj ? Details_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Details_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Details_hasOwnProp.call(b, prop))
      Details_defNormalProp(a, prop, b[prop]);
  if (Details_getOwnPropSymbols)
    for (var prop of Details_getOwnPropSymbols(b)) {
      if (Details_propIsEnum.call(b, prop))
        Details_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Details_spreadProps = (a, b) => Details_defProps(a, Details_getOwnPropDescs(b));
var Details_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Details_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Details_getOwnPropSymbols)
    for (var prop of Details_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Details_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





function isInSummary(node) {
  if (!node) {
    return false;
  }
  return node.tagName === "SUMMARY" || isInSummary(node.parentElement);
}
function hasParent(node, parent) {
  if (!node) {
    return false;
  }
  return node === parent || hasParent(node.parentElement, parent);
}
function Details(_a) {
  var _b = _a, { summary, children } = _b, props = Details_objRest(_b, ["summary", "children"]);
  const isBrowser = (0,useIsBrowser/* default */.Z)();
  const detailsRef = (0,react.useRef)(null);
  const { collapsed, setCollapsed } = (0,Collapsible/* useCollapsible */.u)({
    initialState: !props.open
  });
  const [open, setOpen] = (0,react.useState)(props.open);
  return /* @__PURE__ */ react.createElement("details", Details_spreadProps(Details_spreadValues({}, props), {
    ref: detailsRef,
    open,
    "data-collapsed": collapsed,
    className: (0,clsx_m/* default */.Z)(Details_styles_module.details, isBrowser && Details_styles_module.isBrowser, props.className),
    onMouseDown: (e) => {
      const target = e.target;
      if (isInSummary(target) && e.detail > 1) {
        e.preventDefault();
      }
    },
    onClick: (e) => {
      e.stopPropagation();
      const target = e.target;
      const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current);
      if (!shouldToggle) {
        return;
      }
      e.preventDefault();
      if (collapsed) {
        setCollapsed(false);
        setOpen(true);
      } else {
        setCollapsed(true);
      }
    }
  }), summary != null ? summary : /* @__PURE__ */ react.createElement("summary", null, "Details"), /* @__PURE__ */ react.createElement(Collapsible/* Collapsible */.z, {
    lazy: false,
    collapsed,
    disableSSRStyle: true,
    onCollapseTransitionEnd: (newCollapsed) => {
      setCollapsed(newCollapsed);
      setOpen(!newCollapsed);
    }
  }, /* @__PURE__ */ react.createElement("div", {
    className: Details_styles_module.collapsibleContent
  }, children)));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var theme_Details_styles_module = ({"details":"details_b_Ee"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
var theme_Details_defProp = Object.defineProperty;
var theme_Details_defProps = Object.defineProperties;
var theme_Details_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var theme_Details_getOwnPropSymbols = Object.getOwnPropertySymbols;
var theme_Details_hasOwnProp = Object.prototype.hasOwnProperty;
var theme_Details_propIsEnum = Object.prototype.propertyIsEnumerable;
var theme_Details_defNormalProp = (obj, key, value) => key in obj ? theme_Details_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var theme_Details_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (theme_Details_hasOwnProp.call(b, prop))
      theme_Details_defNormalProp(a, prop, b[prop]);
  if (theme_Details_getOwnPropSymbols)
    for (var prop of theme_Details_getOwnPropSymbols(b)) {
      if (theme_Details_propIsEnum.call(b, prop))
        theme_Details_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var theme_Details_spreadProps = (a, b) => theme_Details_defProps(a, theme_Details_getOwnPropDescs(b));
var theme_Details_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (theme_Details_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && theme_Details_getOwnPropSymbols)
    for (var prop of theme_Details_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && theme_Details_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




const InfimaClasses = "alert alert--info";
function Details_Details(_a) {
  var props = theme_Details_objRest(_a, []);
  return /* @__PURE__ */ react.createElement(Details, theme_Details_spreadProps(theme_Details_spreadValues({}, props), {
    className: (0,clsx_m/* default */.Z)(InfimaClasses, theme_Details_styles_module.details, props.className)
  }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Details.js
var MDXComponents_Details_defProp = Object.defineProperty;
var MDXComponents_Details_defProps = Object.defineProperties;
var MDXComponents_Details_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var MDXComponents_Details_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MDXComponents_Details_hasOwnProp = Object.prototype.hasOwnProperty;
var MDXComponents_Details_propIsEnum = Object.prototype.propertyIsEnumerable;
var MDXComponents_Details_defNormalProp = (obj, key, value) => key in obj ? MDXComponents_Details_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MDXComponents_Details_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MDXComponents_Details_hasOwnProp.call(b, prop))
      MDXComponents_Details_defNormalProp(a, prop, b[prop]);
  if (MDXComponents_Details_getOwnPropSymbols)
    for (var prop of MDXComponents_Details_getOwnPropSymbols(b)) {
      if (MDXComponents_Details_propIsEnum.call(b, prop))
        MDXComponents_Details_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var MDXComponents_Details_spreadProps = (a, b) => MDXComponents_Details_defProps(a, MDXComponents_Details_getOwnPropDescs(b));


function MDXDetails(props) {
  const items = react.Children.toArray(props.children);
  const summary = items.find((item) => {
    var _a;
    return react.isValidElement(item) && ((_a = item.props) == null ? void 0 : _a.mdxType) === "summary";
  });
  const children = /* @__PURE__ */ react.createElement(react.Fragment, null, items.filter((item) => item !== summary));
  return /* @__PURE__ */ react.createElement(Details_Details, MDXComponents_Details_spreadProps(MDXComponents_Details_spreadValues({}, props), {
    summary
  }), children);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Heading.js
var Heading_defProp = Object.defineProperty;
var Heading_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Heading_hasOwnProp = Object.prototype.hasOwnProperty;
var Heading_propIsEnum = Object.prototype.propertyIsEnumerable;
var Heading_defNormalProp = (obj, key, value) => key in obj ? Heading_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Heading_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Heading_hasOwnProp.call(b, prop))
      Heading_defNormalProp(a, prop, b[prop]);
  if (Heading_getOwnPropSymbols)
    for (var prop of Heading_getOwnPropSymbols(b)) {
      if (Heading_propIsEnum.call(b, prop))
        Heading_defNormalProp(a, prop, b[prop]);
    }
  return a;
};


function MDXHeading(props) {
  return /* @__PURE__ */ react.createElement(Heading/* default */.Z, Heading_spreadValues({}, props));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Ul_styles_module = ({"containsTaskList":"containsTaskList_mC6p"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/index.js
var Ul_defProp = Object.defineProperty;
var Ul_defProps = Object.defineProperties;
var Ul_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Ul_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Ul_hasOwnProp = Object.prototype.hasOwnProperty;
var Ul_propIsEnum = Object.prototype.propertyIsEnumerable;
var Ul_defNormalProp = (obj, key, value) => key in obj ? Ul_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Ul_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Ul_hasOwnProp.call(b, prop))
      Ul_defNormalProp(a, prop, b[prop]);
  if (Ul_getOwnPropSymbols)
    for (var prop of Ul_getOwnPropSymbols(b)) {
      if (Ul_propIsEnum.call(b, prop))
        Ul_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Ul_spreadProps = (a, b) => Ul_defProps(a, Ul_getOwnPropDescs(b));



function transformUlClassName(className) {
  return (0,clsx_m/* default */.Z)(className, (className == null ? void 0 : className.includes("contains-task-list")) && Ul_styles_module.containsTaskList);
}
function MDXUl(props) {
  return /* @__PURE__ */ react.createElement("ul", Ul_spreadProps(Ul_spreadValues({}, props), {
    className: transformUlClassName(props.className)
  }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Img_styles_module = ({"img":"img_ev3q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/index.js
var Img_defProp = Object.defineProperty;
var Img_defProps = Object.defineProperties;
var Img_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Img_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Img_hasOwnProp = Object.prototype.hasOwnProperty;
var Img_propIsEnum = Object.prototype.propertyIsEnumerable;
var Img_defNormalProp = (obj, key, value) => key in obj ? Img_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Img_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Img_hasOwnProp.call(b, prop))
      Img_defNormalProp(a, prop, b[prop]);
  if (Img_getOwnPropSymbols)
    for (var prop of Img_getOwnPropSymbols(b)) {
      if (Img_propIsEnum.call(b, prop))
        Img_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Img_spreadProps = (a, b) => Img_defProps(a, Img_getOwnPropDescs(b));



function transformImgClassName(className) {
  return (0,clsx_m/* default */.Z)(className, Img_styles_module.img);
}
function MDXImg(props) {
  return /* @__PURE__ */ react.createElement("img", Img_spreadProps(Img_spreadValues({
    loading: "lazy"
  }, props), {
    className: transformImgClassName(props.className)
  }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Admonition_styles_module = ({"admonition":"admonition_LlT9","admonitionHeading":"admonitionHeading_tbUL","admonitionIcon":"admonitionIcon_kALy","admonitionContent":"admonitionContent_S0QG"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js
var Admonition_defProp = Object.defineProperty;
var Admonition_defProps = Object.defineProperties;
var Admonition_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Admonition_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Admonition_hasOwnProp = Object.prototype.hasOwnProperty;
var Admonition_propIsEnum = Object.prototype.propertyIsEnumerable;
var Admonition_defNormalProp = (obj, key, value) => key in obj ? Admonition_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Admonition_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Admonition_hasOwnProp.call(b, prop))
      Admonition_defNormalProp(a, prop, b[prop]);
  if (Admonition_getOwnPropSymbols)
    for (var prop of Admonition_getOwnPropSymbols(b)) {
      if (Admonition_propIsEnum.call(b, prop))
        Admonition_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Admonition_spreadProps = (a, b) => Admonition_defProps(a, Admonition_getOwnPropDescs(b));





function NoteIcon() {
  return /* @__PURE__ */ react.createElement("svg", {
    viewBox: "0 0 14 16"
  }, /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
  }));
}
function TipIcon() {
  return /* @__PURE__ */ react.createElement("svg", {
    viewBox: "0 0 12 16"
  }, /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
  }));
}
function DangerIcon() {
  return /* @__PURE__ */ react.createElement("svg", {
    viewBox: "0 0 12 16"
  }, /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
  }));
}
function InfoIcon() {
  return /* @__PURE__ */ react.createElement("svg", {
    viewBox: "0 0 14 16"
  }, /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
  }));
}
function CautionIcon() {
  return /* @__PURE__ */ react.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ react.createElement("path", {
    fillRule: "evenodd",
    d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
  }));
}
const AdmonitionConfigs = {
  note: {
    infimaClassName: "secondary",
    iconComponent: NoteIcon,
    label: /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.admonition.note",
      description: "The default label used for the Note admonition (:::note)"
    }, "note")
  },
  tip: {
    infimaClassName: "success",
    iconComponent: TipIcon,
    label: /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.admonition.tip",
      description: "The default label used for the Tip admonition (:::tip)"
    }, "tip")
  },
  danger: {
    infimaClassName: "danger",
    iconComponent: DangerIcon,
    label: /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.admonition.danger",
      description: "The default label used for the Danger admonition (:::danger)"
    }, "danger")
  },
  info: {
    infimaClassName: "info",
    iconComponent: InfoIcon,
    label: /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.admonition.info",
      description: "The default label used for the Info admonition (:::info)"
    }, "info")
  },
  caution: {
    infimaClassName: "warning",
    iconComponent: CautionIcon,
    label: /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.admonition.caution",
      description: "The default label used for the Caution admonition (:::caution)"
    }, "caution")
  }
};
const aliases = {
  secondary: "note",
  important: "info",
  success: "tip",
  warning: "danger"
};
function getAdmonitionConfig(unsafeType) {
  var _a;
  const type = (_a = aliases[unsafeType]) != null ? _a : unsafeType;
  const config = AdmonitionConfigs[type];
  if (config) {
    return config;
  }
  console.warn(`No admonition config found for admonition type "${type}". Using Info as fallback.`);
  return AdmonitionConfigs.info;
}
function extractMDXAdmonitionTitle(children) {
  const items = react.Children.toArray(children);
  const mdxAdmonitionTitle = items.find((item) => {
    var _a;
    return react.isValidElement(item) && ((_a = item.props) == null ? void 0 : _a.mdxType) === "mdxAdmonitionTitle";
  });
  const rest = /* @__PURE__ */ react.createElement(react.Fragment, null, items.filter((item) => item !== mdxAdmonitionTitle));
  return {
    mdxAdmonitionTitle,
    rest
  };
}
function processAdmonitionProps(props) {
  var _a;
  const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(props.children);
  return Admonition_spreadProps(Admonition_spreadValues({}, props), {
    title: (_a = props.title) != null ? _a : mdxAdmonitionTitle,
    children: rest
  });
}
function Admonition(props) {
  const { children, type, title, icon: iconProp } = processAdmonitionProps(props);
  const typeConfig = getAdmonitionConfig(type);
  const titleLabel = title != null ? title : typeConfig.label;
  const { iconComponent: IconComponent } = typeConfig;
  const icon = iconProp != null ? iconProp : /* @__PURE__ */ react.createElement(IconComponent, null);
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.common.admonition */.k.common.admonition, ThemeClassNames/* ThemeClassNames.common.admonitionType */.k.common.admonitionType(props.type), "alert", `alert--${typeConfig.infimaClassName}`, Admonition_styles_module.admonition)
  }, /* @__PURE__ */ react.createElement("div", {
    className: Admonition_styles_module.admonitionHeading
  }, /* @__PURE__ */ react.createElement("span", {
    className: Admonition_styles_module.admonitionIcon
  }, icon), titleLabel), /* @__PURE__ */ react.createElement("div", {
    className: Admonition_styles_module.admonitionContent
  }, children));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js
var MDXComponents_defProp = Object.defineProperty;
var MDXComponents_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MDXComponents_hasOwnProp = Object.prototype.hasOwnProperty;
var MDXComponents_propIsEnum = Object.prototype.propertyIsEnumerable;
var MDXComponents_defNormalProp = (obj, key, value) => key in obj ? MDXComponents_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MDXComponents_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MDXComponents_hasOwnProp.call(b, prop))
      MDXComponents_defNormalProp(a, prop, b[prop]);
  if (MDXComponents_getOwnPropSymbols)
    for (var prop of MDXComponents_getOwnPropSymbols(b)) {
      if (MDXComponents_propIsEnum.call(b, prop))
        MDXComponents_defNormalProp(a, prop, b[prop]);
    }
  return a;
};










const MDXComponents = {
  head: MDXHead,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  details: MDXDetails,
  ul: MDXUl,
  img: MDXImg,
  h1: (props) => /* @__PURE__ */ react.createElement(MDXHeading, MDXComponents_spreadValues({
    as: "h1"
  }, props)),
  h2: (props) => /* @__PURE__ */ react.createElement(MDXHeading, MDXComponents_spreadValues({
    as: "h2"
  }, props)),
  h3: (props) => /* @__PURE__ */ react.createElement(MDXHeading, MDXComponents_spreadValues({
    as: "h3"
  }, props)),
  h4: (props) => /* @__PURE__ */ react.createElement(MDXHeading, MDXComponents_spreadValues({
    as: "h4"
  }, props)),
  h5: (props) => /* @__PURE__ */ react.createElement(MDXHeading, MDXComponents_spreadValues({
    as: "h5"
  }, props)),
  h6: (props) => /* @__PURE__ */ react.createElement(MDXHeading, MDXComponents_spreadValues({
    as: "h6"
  }, props)),
  admonition: Admonition
};
/* harmony default export */ var theme_MDXComponents = (MDXComponents);

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js



function MDXContent({ children }) {
  return /* @__PURE__ */ react.createElement(esm/* MDXProvider */.Zo, {
    components: theme_MDXComponents
  }, children);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Content/index.js






function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === "undefined";
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docMarkdown */.k.docs.docMarkdown, "markdown")
  }, syntheticTitle && /* @__PURE__ */ react.createElement("header", null, /* @__PURE__ */ react.createElement(Heading/* default */.Z, {
    as: "h1"
  }, syntheticTitle)), /* @__PURE__ */ react.createElement(MDXContent, null, children));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js + 2 modules
var DocBreadcrumbs = __webpack_require__(43786);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Layout_styles_module = ({"docItemContainer":"docItemContainer_Djhp","docItemCol":"docItemCol_VOVn"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Layout/index.js













function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = (0,useWindowSize/* useWindowSize */.i)();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? /* @__PURE__ */ react.createElement(DocItemTOCMobile, null) : void 0;
  const desktop = canRender && (windowSize === "desktop" || windowSize === "ssr") ? /* @__PURE__ */ react.createElement(DocItemTOCDesktop, null) : void 0;
  return {
    hidden,
    mobile,
    desktop
  };
}
function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  return /* @__PURE__ */ react.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("col", !docTOC.hidden && Layout_styles_module.docItemCol)
  }, /* @__PURE__ */ react.createElement(DocVersionBanner/* default */.Z, null), /* @__PURE__ */ react.createElement("div", {
    className: Layout_styles_module.docItemContainer
  }, /* @__PURE__ */ react.createElement("article", null, /* @__PURE__ */ react.createElement(DocBreadcrumbs/* default */.Z, null), /* @__PURE__ */ react.createElement(DocVersionBadge/* default */.Z, null), docTOC.mobile, /* @__PURE__ */ react.createElement(DocItemContent, null, children), /* @__PURE__ */ react.createElement(DocItemFooter, null)), /* @__PURE__ */ react.createElement(DocItemPaginator, null))), docTOC.desktop && /* @__PURE__ */ react.createElement("div", {
    className: "col col--3"
  }, docTOC.desktop));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/index.js





function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
  const MDXComponent = props.content;
  return /* @__PURE__ */ react.createElement(DocProvider, {
    content: props.content
  }, /* @__PURE__ */ react.createElement(metadataUtils/* HtmlClassNameProvider */.FG, {
    className: docHtmlClassName
  }, /* @__PURE__ */ react.createElement(DocItemMetadata, null), /* @__PURE__ */ react.createElement(DocItemLayout, null, /* @__PURE__ */ react.createElement(MDXComponent, null))));
}


/***/ }),

/***/ 30106:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DocPaginator; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(33084);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js



function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props;
  return /* @__PURE__ */ react.createElement(Link/* default */.Z, {
    className: (0,clsx_m/* default */.Z)("pagination-nav__link", isNext ? "pagination-nav__link--next" : "pagination-nav__link--prev"),
    to: permalink
  }, subLabel && /* @__PURE__ */ react.createElement("div", {
    className: "pagination-nav__sublabel"
  }, subLabel), /* @__PURE__ */ react.createElement("div", {
    className: "pagination-nav__label"
  }, title));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
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



function DocPaginator(props) {
  const { previous, next } = props;
  return /* @__PURE__ */ react.createElement("nav", {
    className: "pagination-nav docusaurus-mt-lg",
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.docs.paginator.navAriaLabel",
      message: "Docs pages navigation",
      description: "The ARIA label for the docs pagination"
    })
  }, previous && /* @__PURE__ */ react.createElement(PaginatorNavLink, __spreadProps(__spreadValues({}, previous), {
    subLabel: /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.docs.paginator.previous",
      description: "The label used to navigate to the previous doc"
    }, "Previous")
  })), next && /* @__PURE__ */ react.createElement(PaginatorNavLink, __spreadProps(__spreadValues({}, next), {
    subLabel: /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.docs.paginator.next",
      description: "The label used to navigate to the next doc"
    }, "Next"),
    isNext: true
  })));
}


/***/ }),

/***/ 3560:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DocVersionBadge; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86010);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33084);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83631);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92879);





function DocVersionBadge({ className }) {
  const versionMetadata = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useDocsVersion */ .E)();
  if (versionMetadata.badge) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .ThemeClassNames.docs.docVersionBadge */ .k.docs.docVersionBadge, "badge badge--secondary")
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      id: "theme.docs.versionBadge.label",
      values: { versionLabel: versionMetadata.label }
    }, "Version: {versionLabel}"));
  }
  return null;
}


/***/ }),

/***/ 55199:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Heading; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(33084);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(57343);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_LWe7","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_WYt5"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
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





function Heading(_a) {
  var _b = _a, { as: As, id } = _b, props = __objRest(_b, ["as", "id"]);
  const {
    navbar: { hideOnScroll }
  } = (0,useThemeConfig/* useThemeConfig */.L)();
  if (As === "h1" || !id) {
    return /* @__PURE__ */ react.createElement(As, __spreadProps(__spreadValues({}, props), {
      id: void 0
    }));
  }
  return /* @__PURE__ */ react.createElement(As, __spreadProps(__spreadValues({}, props), {
    className: (0,clsx_m/* default */.Z)("anchor", hideOnScroll ? styles_module.anchorWithHideOnScrollNavbar : styles_module.anchorWithStickyNavbar),
    id
  }), props.children, /* @__PURE__ */ react.createElement("a", {
    className: "hash-link",
    href: `#${id}`,
    title: (0,Translate/* translate */.I)({
      id: "theme.common.headingLinkTitle",
      message: "Direct link to heading",
      description: "Title for link to heading"
    })
  }, "\u200B"));
}


/***/ }),

/***/ 87594:
/***/ (function(module, exports) {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ })

}]);